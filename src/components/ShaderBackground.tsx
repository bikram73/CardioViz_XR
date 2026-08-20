import React, { useEffect, useRef } from 'react';

interface ShaderBackgroundProps {
  opacity?: number;
  interactive?: boolean;
}

export const ShaderBackground: React.FC<ShaderBackgroundProps> = ({
  opacity = 0.45,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth || 1280;
      const h = canvas.clientHeight || window.innerHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
        vec2 uv = v_texCoord;
        
        // Deep navy background base
        vec3 color = vec3(0.02, 0.04, 0.08); 
        
        // Ambient arterial glow (red biological pulse)
        float pulse = (sin(u_time * 0.6) * 0.5 + 0.5) * 0.16;
        vec3 arterialGlow = vec3(0.725, 0.11, 0.11) * pulse;
        color += arterialGlow * (1.0 - uv.y);
        
        // Microscopic particle noise
        vec2 particleUv = uv * 24.0;
        particleUv.y += u_time * 0.25;
        float n = random(floor(particleUv));
        if (n > 0.975) {
          float spark = pow(sin(u_time * 2.5 + n * 100.0) * 0.5 + 0.5, 6.0);
          color += vec3(0.18, 0.85, 0.95) * spark * 0.45; // Cyan particles
        }

        // Secondary subtle golden ApoB lipid particles
        vec2 lipidUv = uv * 18.0 + vec2(u_time * 0.08, u_time * 0.15);
        float nLipid = random(floor(lipidUv));
        if (nLipid > 0.985) {
          float glowLipid = pow(sin(u_time * 1.8 + nLipid * 60.0) * 0.5 + 0.5, 4.0);
          color += vec3(0.95, 0.65, 0.35) * glowLipid * 0.3;
        }

        // Dynamic mouse interactivity ripple
        vec2 mouseNorm = u_mouse / u_resolution;
        float distToMouse = distance(uv, mouseNorm);
        float mouseGlow = smoothstep(0.35, 0.0, distToMouse) * 0.08;
        color += vec3(0.18, 0.85, 0.95) * mouseGlow;

        // Grid pattern
        vec2 grid = fract(uv * 40.0);
        float line = smoothstep(0.02, 0.0, grid.x) + smoothstep(0.02, 0.0, grid.y);
        color += vec3(0.12, 0.23, 0.3) * line * 0.1;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas || !interactive) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouse.x = event.clientX - rect.left;
        mouse.y = rect.height - (event.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-[-2] transition-opacity duration-700"
      style={{ opacity }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};
