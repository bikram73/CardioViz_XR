import React, { useState, useEffect, useRef } from 'react';
import { PROGRESSION_STAGES } from '../data/progressionData';
import { VisualLayerVisibility, ProgressionStage } from '../types';
import {
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  Rotate3d,
  AlertTriangle,
  Activity,
  Layers,
  Sparkles,
  Info,
  Maximize2,
  Sliders,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface ProceduresViewProps {
  selectedStageId: number;
  onSelectStage: (id: number) => void;
}

export const ProceduresView: React.FC<ProceduresViewProps> = ({
  selectedStageId,
  onSelectStage,
}) => {
  // Progression slider state (0% to 100%)
  const [progress, setProgress] = useState<number>(33);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Layer visibility state
  const [layers, setLayers] = useState<VisualLayerVisibility>({
    bloodFlow: true,
    endothelium: true,
    apobParticles: true,
    plaque: true,
    platelets: true,
    thrombus: true,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sync stage based on progress
  useEffect(() => {
    let newStage = 1;
    if (progress < 25) newStage = 1;
    else if (progress < 55) newStage = 2;
    else if (progress < 85) newStage = 3;
    else newStage = 4;

    if (newStage !== selectedStageId) {
      onSelectStage(newStage);
    }
  }, [progress, selectedStageId, onSelectStage]);

  // When selectedStageId changes from external tabs, adjust slider
  useEffect(() => {
    if (selectedStageId === 1 && progress > 24) setProgress(10);
    else if (selectedStageId === 2 && (progress < 25 || progress > 54)) setProgress(35);
    else if (selectedStageId === 3 && (progress < 55 || progress > 84)) setProgress(65);
    else if (selectedStageId === 4 && progress < 85) setProgress(95);
  }, [selectedStageId]);

  // Auto-play progression loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return Math.min(100, prev + 0.4);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Dynamic stage details
  const activeStage: ProgressionStage =
    PROGRESSION_STAGES.find((s) => s.id === selectedStageId) ||
    PROGRESSION_STAGES[0];

  // Canvas 2D Particle Simulation (Blood cells, laser scanner, ApoB lipids)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // Generate simulated erythrocytes & lipid particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      type: 'erythrocyte' | 'apob' | 'platelet' | 'lipid';
      rot: number;
      rotSpeed: number;
    }

    const particles: Particle[] = [];
    const numErythrocytes = 60;
    const numApoB = 40;

    for (let i = 0; i < numErythrocytes; i++) {
      particles.push({
        x: Math.random() * 800,
        y: 150 + Math.random() * 200,
        vx: 1.5 + Math.random() * 2.2,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 6 + Math.random() * 4,
        color: '#E53935',
        type: 'erythrocyte',
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
      });
    }

    for (let i = 0; i < numApoB; i++) {
      particles.push({
        x: Math.random() * 800,
        y: 120 + Math.random() * 260,
        vx: 0.8 + Math.random() * 1.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 2 + Math.random() * 2,
        color: '#FDD835',
        type: 'apob',
        rot: 0,
        rotSpeed: 0,
      });
    }

    const render = () => {
      time += 0.02;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Occlusion factor from progress (0 = wide lumen, 100 = constricted lumen)
      const occlusionFactor = progress / 100;
      const constrictionHeight = 120 * occlusionFactor;

      // Draw Laser Scanning Beam from top-center
      ctx.save();
      const laserX = (Math.sin(time * 0.8) * 0.35 + 0.5) * w;
      const gradient = ctx.createRadialGradient(
        laserX,
        20,
        10,
        laserX,
        h * 0.6,
        180
      );
      gradient.addColorStop(0, 'rgba(47, 217, 244, 0.45)');
      gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.18)');
      gradient.addColorStop(1, 'rgba(47, 217, 244, 0)');

      ctx.beginPath();
      ctx.moveTo(laserX - 25, 0);
      ctx.lineTo(laserX + 25, 0);
      ctx.lineTo(laserX + 160, h);
      ctx.lineTo(laserX - 160, h);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      // Render Endothelial Wall glow if layer is active
      if (layers.endothelium) {
        ctx.save();
        ctx.strokeStyle = 'rgba(47, 217, 244, 0.6)';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#2fd9f4';
        ctx.shadowBlur = 12;

        // Top vessel boundary with stenosis curve
        ctx.beginPath();
        ctx.moveTo(0, 80);
        ctx.bezierCurveTo(
          w * 0.3,
          80 + constrictionHeight * 0.6,
          w * 0.6,
          80 + constrictionHeight * 0.9,
          w,
          80 + constrictionHeight * 0.3
        );
        ctx.stroke();

        // Bottom vessel boundary with stenosis curve
        ctx.beginPath();
        ctx.moveTo(0, h - 80);
        ctx.bezierCurveTo(
          w * 0.3,
          h - 80 - constrictionHeight * 0.6,
          w * 0.6,
          h - 80 - constrictionHeight * 0.9,
          w,
          h - 80 - constrictionHeight * 0.3
        );
        ctx.stroke();
        ctx.restore();
      }

      // Render Plaque Accumulation if layer is active
      if (layers.plaque && progress > 20) {
        ctx.save();
        const plaqueGrad = ctx.createLinearGradient(0, 0, w, h);
        plaqueGrad.addColorStop(0, 'rgba(255, 174, 131, 0.25)');
        plaqueGrad.addColorStop(0.5, 'rgba(249, 115, 22, 0.45)');
        plaqueGrad.addColorStop(1, 'rgba(220, 38, 38, 0.3)');

        // Top plaque lump
        ctx.beginPath();
        ctx.moveTo(w * 0.25, 80);
        ctx.quadraticCurveTo(
          w * 0.55,
          80 + constrictionHeight * 1.1,
          w * 0.85,
          80
        );
        ctx.fillStyle = plaqueGrad;
        ctx.fill();

        // Bottom plaque lump
        ctx.beginPath();
        ctx.moveTo(w * 0.25, h - 80);
        ctx.quadraticCurveTo(
          w * 0.55,
          h - 80 - constrictionHeight * 1.1,
          w * 0.85,
          h - 80
        );
        ctx.fill();
        ctx.restore();
      }

      // Render Thrombus Clot Mesh if Stage 4 (progress > 80)
      if (layers.thrombus && progress > 75) {
        ctx.save();
        const clotIntensity = (progress - 75) / 25;
        ctx.fillStyle = `rgba(147, 0, 10, ${clotIntensity * 0.75})`;
        ctx.shadowColor = '#ff5050';
        ctx.shadowBlur = 18;

        ctx.beginPath();
        ctx.arc(
          w * 0.65,
          h * 0.5,
          25 + clotIntensity * 35,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Jagged fibrin strands
        ctx.strokeStyle = `rgba(255, 180, 171, ${clotIntensity * 0.85})`;
        ctx.lineWidth = 2;
        for (let j = 0; j < 8; j++) {
          const ang = (j / 8) * Math.PI * 2 + time;
          const r1 = 15;
          const r2 = 45 * clotIntensity;
          ctx.beginPath();
          ctx.moveTo(
            w * 0.65 + Math.cos(ang) * r1,
            h * 0.5 + Math.sin(ang) * r1
          );
          ctx.lineTo(
            w * 0.65 + Math.cos(ang) * r2,
            h * 0.5 + Math.sin(ang) * r2
          );
          ctx.stroke();
        }
        ctx.restore();
      }

      // Render Flowing Blood Cells & Particles
      particles.forEach((p) => {
        // Speed slows down if occlusion is severe or near stenosis
        let currentSpeed = p.vx;
        if (p.x > w * 0.35 && p.x < w * 0.75) {
          // Narrow channel accelerates velocity, but severe thrombus arrests flow
          if (progress > 80) {
            currentSpeed *= 0.25;
          } else {
            currentSpeed *= 1 + occlusionFactor * 0.6;
          }
        }

        p.x += currentSpeed;
        p.y += p.vy + Math.sin(time * 2 + p.x * 0.01) * 0.3;
        p.rot += p.rotSpeed;

        // Wrap around canvas
        if (p.x > w + 20) {
          p.x = -20;
          p.y = 120 + Math.random() * (h - 240);
        }

        // Draw Erythrocytes
        if (p.type === 'erythrocyte' && layers.bloodFlow) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);

          // Biconcave disc 3D appearance
          const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, p.radius);
          grad.addColorStop(0, '#990000');
          grad.addColorStop(0.6, '#EF4444');
          grad.addColorStop(1, '#68000a');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius, p.radius * 0.65, 0, 0, Math.PI * 2);
          ctx.fill();

          // Subtle dimple shadow
          ctx.fillStyle = 'rgba(40, 0, 0, 0.5)';
          ctx.beginPath();
          ctx.arc(0, 0, p.radius * 0.35, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Draw ApoB Lipoprotein Particles (Gold/Orange spheres)
        if (p.type === 'apob' && layers.apobParticles) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#FDD835';
          ctx.shadowColor = '#FDD835';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [progress, layers]);

  const toggleLayer = (key: keyof VisualLayerVisibility) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleStageSelect = (stageId: number) => {
    onSelectStage(stageId);
    if (stageId === 1) setProgress(5);
    if (stageId === 2) setProgress(35);
    if (stageId === 3) setProgress(65);
    if (stageId === 4) setProgress(95);
  };

  const handleReset = () => {
    setProgress(33);
    setZoomLevel(1);
    setRotationAngle(0);
    setIsPlaying(false);
    onSelectStage(2);
  };

  const handleRotate = () => {
    setRotationAngle((prev) => (prev + 90) % 360);
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] pt-20 pb-4 px-3 sm:px-6 md:px-10 flex flex-col relative z-10 max-w-[1600px] mx-auto">
      {/* Main Simulation Viewport Container */}
      <div className="flex-1 flex gap-4 sm:gap-6 min-h-0 relative">
        {/* Left Vertical Stage Navigation */}
        <aside className="w-14 sm:w-16 flex flex-col items-center justify-center gap-6 z-20 select-none py-4">
          <div className="flex flex-col gap-7 sm:gap-8 relative items-center">
            {/* Vertical Connecting Line */}
            <div className="absolute top-4 bottom-4 w-[1px] bg-[#3c494c]/40 -z-10" />

            {/* Stage 01 */}
            <button
              id="stage-nav-btn-1"
              onClick={() => handleStageSelect(1)}
              className={`w-10 sm:w-11 h-10 sm:h-11 rounded-full glass-panel flex items-center justify-center transition-all duration-300 relative group cursor-pointer ${
                selectedStageId === 1
                  ? 'border-[#2fd9f4] glow-active text-[#2fd9f4] scale-110 bg-[#061423]'
                  : 'text-[#bbc9cd] hover:text-[#2fd9f4] hover:border-[#2fd9f4]/60'
              }`}
            >
              <span className="font-mono-data text-xs sm:text-sm font-bold">01</span>
              {selectedStageId === 1 && (
                <div className="absolute left-14 sm:left-16 top-1/2 -translate-y-1/2 font-technical text-[11px] text-[#2fd9f4] bg-[#132030]/90 px-2.5 py-1 rounded border border-[#2fd9f4]/40 whitespace-nowrap shadow-[0_0_10px_rgba(47,217,244,0.3)] z-30">
                  HEALTHY ENDOTHELIUM
                </div>
              )}
            </button>

            {/* Stage 02 */}
            <button
              id="stage-nav-btn-2"
              onClick={() => handleStageSelect(2)}
              className={`w-10 sm:w-11 h-10 sm:h-11 rounded-full glass-panel flex items-center justify-center transition-all duration-300 relative group cursor-pointer ${
                selectedStageId === 2
                  ? 'border-[#ffae83] shadow-[0_0_15px_rgba(255,174,131,0.6)] text-[#ffae83] scale-110 bg-[#061423]'
                  : 'text-[#bbc9cd] hover:text-[#ffae83] hover:border-[#ffae83]/60'
              }`}
            >
              <span className="font-mono-data text-xs sm:text-sm font-bold">02</span>
              {selectedStageId === 2 && (
                <div className="absolute left-14 sm:left-16 top-1/2 -translate-y-1/2 font-technical text-[11px] text-[#ffae83] bg-[#132030]/90 px-2.5 py-1 rounded border border-[#ffae83]/40 whitespace-nowrap shadow-[0_0_10px_rgba(255,174,131,0.3)] z-30">
                  ATHEROSCLEROSIS
                </div>
              )}
            </button>

            {/* Stage 03 */}
            <button
              id="stage-nav-btn-3"
              onClick={() => handleStageSelect(3)}
              className={`w-10 sm:w-11 h-10 sm:h-11 rounded-full glass-panel flex items-center justify-center transition-all duration-300 relative group cursor-pointer ${
                selectedStageId === 3
                  ? 'border-[#ffae83] shadow-[0_0_15px_rgba(255,174,131,0.6)] text-[#ffae83] scale-110 bg-[#061423]'
                  : 'text-[#bbc9cd] hover:text-[#ffae83] hover:border-[#ffae83]/60'
              }`}
            >
              <span className="font-mono-data text-xs sm:text-sm font-bold">03</span>
              {selectedStageId === 3 && (
                <div className="absolute left-14 sm:left-16 top-1/2 -translate-y-1/2 font-technical text-[11px] text-[#ffae83] bg-[#132030]/90 px-2.5 py-1 rounded border border-[#ffae83]/40 whitespace-nowrap shadow-[0_0_10px_rgba(255,174,131,0.3)] z-30">
                  PLAQUE EXPANSION
                </div>
              )}
            </button>

            {/* Stage 04 */}
            <button
              id="stage-nav-btn-4"
              onClick={() => handleStageSelect(4)}
              className={`w-10 sm:w-11 h-10 sm:h-11 rounded-full glass-panel flex items-center justify-center transition-all duration-300 relative group cursor-pointer ${
                selectedStageId === 4
                  ? 'border-[#ffb4ab] shadow-[0_0_20px_rgba(255,180,171,0.8)] text-[#ffb4ab] scale-110 bg-[#93000a]/40'
                  : 'text-[#bbc9cd] hover:text-[#ffb4ab] hover:border-[#ffb4ab]/60'
              }`}
            >
              <span className="font-mono-data text-xs sm:text-sm font-bold">04</span>
              {selectedStageId === 4 && (
                <div className="absolute left-14 sm:left-16 top-1/2 -translate-y-1/2 font-technical text-[11px] text-[#ffb4ab] bg-[#93000a]/90 px-2.5 py-1 rounded border border-[#ffb4ab]/50 whitespace-nowrap shadow-[0_0_15px_rgba(255,180,171,0.6)] z-30">
                  RUPTURE &amp; CLOT
                </div>
              )}
            </button>
          </div>
        </aside>

        {/* Center 3D Artery Viewport */}
        <section
          id="procedures-viewport-card"
          className="flex-1 relative rounded-2xl overflow-hidden glass-panel flex flex-col border border-[#1E3A4C] shadow-2xl"
        >
          {/* 3D Viewport Backdrop Image */}
          <div
            className="flex-1 relative w-full h-full overflow-hidden transition-transform duration-500"
            style={{
              transform: `scale(${zoomLevel}) rotate(${rotationAngle}deg)`,
            }}
          >
            <img
              alt="3D Visualization of the interior of a human artery with red blood cells"
              className="w-full h-full object-cover absolute inset-0 z-0 opacity-90 mix-blend-screen"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZAr1Jgprd63dMmWdw2oOKAPPtsDveVKmTbWOH8CKKOALI_7b8vrGZPXz4GIRamhxR6VCZi2s9u3hpG3fxtFmM7rY5sGpsmLQScAaRtIomokUzOE3L6O2UFU73xfoR3G57O1-MnxrneFS4e56ABaXvaQFg-edODWLRxLd5BAtoGp1FA3SAykeJ-enq6oRGHp29EBzSw05S99HfUqRHchCmL8jomqgwKl0dTjlVLGbdxqDudRIy77oaBw"
            />

            {/* Interactive 2D Canvas Particle Simulation Layer */}
            <canvas
              ref={canvasRef}
              width={1024}
              height={600}
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            />

            {/* Radial Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061423] via-transparent to-[#061423]/50 pointer-events-none z-10" />
          </div>

          {/* Floating Info Card (Top Left of Viewport) */}
          <div
            id="procedure-floating-info-card"
            className="absolute top-5 left-5 z-20 glass-panel p-4 sm:p-5 rounded-xl max-w-xs sm:max-w-sm border border-[#1E3A4C] shadow-2xl backdrop-blur-xl animate-in fade-in duration-300"
          >
            <div className="flex items-center justify-between mb-2 border-b border-[#3c494c]/40 pb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle
                  className="w-4 h-4"
                  style={{ color: activeStage.accentHex }}
                />
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  {selectedStageId === 1 && 'Healthy Lumen'}
                  {selectedStageId === 2 && 'Plaque Buildup'}
                  {selectedStageId === 3 && 'Severe Stenosis'}
                  {selectedStageId === 4 && 'Thrombus Occlusion'}
                </h3>
              </div>
              <span
                className="text-[10px] font-technical px-2 py-0.5 rounded font-bold"
                style={{
                  color: activeStage.accentHex,
                  backgroundColor: `${activeStage.accentHex}18`,
                }}
              >
                {activeStage.riskLevel}
              </span>
            </div>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              {selectedStageId === 1 &&
                'Normal laminar flow maintained by healthy endothelial lining with intact glycocalyx and standard shear stress.'}
              {selectedStageId === 2 &&
                'Significant lipid accumulation observed in the intima layer, restricting normal hemodynamic flow.'}
              {selectedStageId === 3 &&
                'Fibrous cap covers a necrotic lipid core, causing severe mechanical narrowing and high turbulent shear stress.'}
              {selectedStageId === 4 &&
                'Acute cap fissure exposes tissue factor, precipitating sudden platelet aggregation and total arterial occlusion.'}
            </p>

            {/* Quick Telemetry metrics */}
            <div className="mt-3 pt-2 border-t border-[#3c494c]/30 grid grid-cols-2 gap-2 text-[11px] font-mono-data">
              <div className="text-[#bbc9cd]">
                Lumen Stenosis:{' '}
                <span className="text-white font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="text-[#bbc9cd]">
                Velocity:{' '}
                <span
                  style={{ color: activeStage.accentHex }}
                  className="font-bold"
                >
                  {activeStage.bloodVelocity} cm/s
                </span>
              </div>
            </div>
          </div>

          {/* Floating Visual Legend (Top/Bottom Right) */}
          <div
            id="procedure-floating-legend"
            className="absolute top-5 right-5 z-20 glass-panel p-3.5 sm:p-4 rounded-xl border border-[#1E3A4C] shadow-2xl flex flex-col gap-2 min-w-[170px] backdrop-blur-xl"
          >
            <div className="font-technical text-[10px] sm:text-[11px] text-[#2fd9f4] mb-0.5 border-b border-[#3c494c]/40 pb-1 flex items-center justify-between">
              <span>VISUAL LEGEND</span>
              <Layers className="w-3 h-3 text-[#2fd9f4]" />
            </div>

            <button
              onClick={() => toggleLayer('bloodFlow')}
              className={`flex items-center justify-between text-left font-mono-data text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors ${
                layers.bloodFlow ? 'text-white' : 'text-[#bbc9cd]/40 line-through'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] shadow-[0_0_6px_#E53935]" />
                <span>Blood Cells</span>
              </div>
              <span className="text-[9px] text-[#bbc9cd]/60">
                {layers.bloodFlow ? 'ON' : 'OFF'}
              </span>
            </button>

            <button
              onClick={() => toggleLayer('endothelium')}
              className={`flex items-center justify-between text-left font-mono-data text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors ${
                layers.endothelium ? 'text-white' : 'text-[#bbc9cd]/40 line-through'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E88E5] shadow-[0_0_6px_#1E88E5]" />
                <span>Endothelium</span>
              </div>
              <span className="text-[9px] text-[#bbc9cd]/60">
                {layers.endothelium ? 'ON' : 'OFF'}
              </span>
            </button>

            <button
              onClick={() => toggleLayer('apobParticles')}
              className={`flex items-center justify-between text-left font-mono-data text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors ${
                layers.apobParticles ? 'text-white' : 'text-[#bbc9cd]/40 line-through'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FDD835] shadow-[0_0_6px_#FDD835]" />
                <span>ApoB Particles</span>
              </div>
              <span className="text-[9px] text-[#bbc9cd]/60">
                {layers.apobParticles ? 'ON' : 'OFF'}
              </span>
            </button>

            <button
              onClick={() => toggleLayer('plaque')}
              className={`flex items-center justify-between text-left font-mono-data text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors ${
                layers.plaque ? 'text-white' : 'text-[#bbc9cd]/40 line-through'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8D6E63] shadow-[0_0_6px_#8D6E63]" />
                <span>Plaque</span>
              </div>
              <span className="text-[9px] text-[#bbc9cd]/60">
                {layers.plaque ? 'ON' : 'OFF'}
              </span>
            </button>

            <button
              onClick={() => toggleLayer('platelets')}
              className={`flex items-center justify-between text-left font-mono-data text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors ${
                layers.platelets ? 'text-white' : 'text-[#bbc9cd]/40 line-through'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BA68C8] shadow-[0_0_6px_#BA68C8]" />
                <span>Platelets</span>
              </div>
              <span className="text-[9px] text-[#bbc9cd]/60">
                {layers.platelets ? 'ON' : 'OFF'}
              </span>
            </button>

            <button
              onClick={() => toggleLayer('thrombus')}
              className={`flex items-center justify-between text-left font-mono-data text-[10px] sm:text-[11px] uppercase tracking-wider transition-colors ${
                layers.thrombus ? 'text-white' : 'text-[#bbc9cd]/40 line-through'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#68000a] shadow-[0_0_6px_#93000a]" />
                <span>Thrombus</span>
              </div>
              <span className="text-[9px] text-[#bbc9cd]/60">
                {layers.thrombus ? 'ON' : 'OFF'}
              </span>
            </button>
          </div>

          {/* Bottom Timeline & Controls Bar */}
          <div className="w-full glass-panel border-t border-[#1E3A4C] p-4 sm:p-5 z-20 flex flex-col gap-3.5 backdrop-blur-2xl">
            {/* Progression Slider */}
            <div className="w-full flex items-center gap-4">
              <span className="font-mono-data text-xs text-[#bbc9cd] select-none min-w-[24px]">
                0%
              </span>
              <div className="flex-grow relative flex items-center">
                <input
                  id="progression-scrubber-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="w-full h-2 bg-[#1e2b3b] rounded-lg appearance-none cursor-pointer accent-[#2fd9f4] focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #2fd9f4 0%, #2fd9f4 ${progress}%, #1e2b3b ${progress}%, #1e2b3b 100%)`,
                  }}
                />
              </div>
              <span className="font-mono-data text-xs text-[#bbc9cd] select-none min-w-[34px]">
                100%
              </span>
            </div>

            {/* Bottom Controls Row */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Scientific Legend Indicators */}
              <div className="hidden lg:flex gap-4 flex-wrap items-center">
                <div className="flex items-center gap-1.5 font-technical text-[11px] text-[#bbc9cd]">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" /> Blood Flow
                </div>
                <div className="flex items-center gap-1.5 font-technical text-[11px] text-[#bbc9cd]">
                  <span className="w-2 h-2 rounded-full bg-[#1E88E5]" /> Endothelium
                </div>
                <div className="flex items-center gap-1.5 font-technical text-[11px] text-[#bbc9cd]">
                  <span className="w-2 h-2 rounded-full bg-[#FDD835]" /> ApoB Particles
                </div>
                <div className="flex items-center gap-1.5 font-technical text-[11px] text-[#bbc9cd]">
                  <span className="w-2 h-2 rounded-full bg-[#8D6E63]" /> Plaque
                </div>
                <div className="flex items-center gap-1.5 font-technical text-[11px] text-[#bbc9cd]">
                  <span className="w-2 h-2 rounded-full bg-[#BA68C8]" /> Platelets
                </div>
                <div className="flex items-center gap-1.5 font-technical text-[11px] text-[#bbc9cd]">
                  <span className="w-2 h-2 rounded-full bg-[#546E7A]" /> Thrombus
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  id="ctrl-btn-rotate"
                  onClick={handleRotate}
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded glass-panel flex items-center justify-center text-[#bbc9cd] hover:text-[#2fd9f4] hover:border-[#2fd9f4] transition-all cursor-pointer"
                  title="Rotate Viewport"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                <button
                  id="ctrl-btn-zoom-in"
                  onClick={() => setZoomLevel((z) => (z >= 1.5 ? 1 : z + 0.25))}
                  className={`w-9 sm:w-10 h-9 sm:h-10 rounded glass-panel flex items-center justify-center transition-all cursor-pointer ${
                    zoomLevel > 1
                      ? 'text-[#2fd9f4] border-[#2fd9f4]'
                      : 'text-[#bbc9cd] hover:text-[#2fd9f4]'
                  }`}
                  title="Toggle Zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <button
                  id="ctrl-btn-reset"
                  onClick={handleReset}
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded glass-panel flex items-center justify-center text-[#bbc9cd] hover:text-[#2fd9f4] hover:border-[#2fd9f4] transition-all cursor-pointer"
                  title="Reset Stage Simulation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <div className="w-[1px] h-8 bg-[#3c494c]/60 mx-1" />

                {/* Play / Pause Toggle Button */}
                <button
                  id="ctrl-btn-play-pause"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-12 sm:w-14 h-9 sm:h-10 rounded flex items-center justify-center transition-all font-bold cursor-pointer active:scale-95 ${
                    isPlaying
                      ? 'bg-[#1e2b3b] text-[#2fd9f4] border border-[#2fd9f4] shadow-[0_0_15px_rgba(47,217,244,0.4)]'
                      : 'bg-[#2fd9f4] text-[#050B14] hover:bg-[#8aebff] shadow-[0_0_15px_rgba(47,217,244,0.3)]'
                  }`}
                  title={isPlaying ? 'Pause Simulation' : 'Play Progression'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
