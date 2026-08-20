import React, { useState, useEffect } from 'react';
import {
  X,
  Radio,
  Activity,
  Maximize2,
  Minimize2,
  Layers,
  Sparkles,
  Zap,
  Rotate3d,
  Sliders,
  Volume2,
  VolumeX,
  Heart,
  Gauge,
  Cpu,
} from 'lucide-react';

interface LiveXRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveXRModal: React.FC<LiveXRModalProps> = ({ isOpen, onClose }) => {
  const [ecgData, setEcgData] = useState<number[]>([]);
  const [contrastInjected, setContrastInjected] = useState<boolean>(false);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);
  const [laserIntensity, setLaserIntensity] = useState<number>(75);
  const [heartRate, setHeartRate] = useState<number>(74);

  // Generate continuous real-time ECG waveform
  useEffect(() => {
    if (!isOpen) return;

    let t = 0;
    const initialPoints = Array.from({ length: 40 }, () => 25);
    setEcgData(initialPoints);

    const interval = setInterval(() => {
      t += 1;
      // Synthesize P-Q-R-S-T wave cycle
      const cycle = t % 12;
      let val = 25;
      if (cycle === 3) val = 30; // P wave
      else if (cycle === 5) val = 15; // Q wave
      else if (cycle === 6) val = 65; // R peak spike
      else if (cycle === 7) val = 8; // S wave
      else if (cycle === 9) val = 35; // T wave
      else val = 25 + (Math.random() - 0.5) * 3; // Baseline noise

      setEcgData((prev) => [...prev.slice(1), val]);

      // Subtle HR fluctuation
      if (t % 15 === 0) {
        setHeartRate(Math.floor(72 + Math.random() * 5));
      }
    }, 80);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#020f1e]/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#061423] border border-[#2fd9f4]/60 rounded-2xl shadow-[0_0_50px_rgba(47,217,244,0.3)] flex flex-col overflow-hidden">
        {/* Top XR HUD Navigation */}
        <div className="px-6 py-4 bg-[#132030]/90 border-b border-[#3c494c]/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <Radio className="w-5 h-5 text-[#2fd9f4] animate-pulse" />
              <span className="absolute w-3 h-3 rounded-full bg-[#2fd9f4]/40 animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg text-white">
                  CARDIOVIZ XR LIVE STREAM
                </span>
                <span className="text-[10px] font-technical px-2 py-0.5 rounded bg-[#005763] text-[#2fd9f4] font-bold border border-[#2fd9f4]/40">
                  120 FPS STEREO
                </span>
              </div>
              <span className="text-[10px] font-technical text-[#bbc9cd]">
                SESSION_ID: XR-CORONARY-9942 // LATENCY: 4.2ms
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSoundMuted(!soundMuted)}
              className="p-2 rounded glass-panel text-[#bbc9cd] hover:text-[#2fd9f4] transition-colors"
              title={soundMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {soundMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              id="close-live-xr-modal-btn"
              onClick={onClose}
              className="p-2 rounded bg-[#1e2b3b] hover:bg-[#93000a] text-[#bbc9cd] hover:text-white border border-[#3c494c] transition-all cursor-pointer"
              title="Close Stream"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Central HUD Matrix */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 sm:p-6 overflow-y-auto">
          {/* Main Visual Stream Viewport (3 Columns on Desktop) */}
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden glass-panel border border-[#1E3A4C] flex flex-col">
            {/* Live Render Canvas Graphic */}
            <div className="flex-1 relative overflow-hidden bg-[#020f1e]">
              <img
                alt="Coronary Artery XR Visualization"
                className={`w-full h-full object-cover opacity-90 transition-all duration-700 ${
                  contrastInjected ? 'brightness-125 contrast-125 saturate-150' : ''
                }`}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZAr1Jgprd63dMmWdw2oOKAPPtsDveVKmTbWOH8CKKOALI_7b8vrGZPXz4GIRamhxR6VCZi2s9u3hpG3fxtFmM7rY5sGpsmLQScAaRtIomokUzOE3L6O2UFU73xfoR3G57O1-MnxrneFS4e56ABaXvaQFg-edODWLRxLd5BAtoGp1FA3SAykeJ-enq6oRGHp29EBzSw05S99HfUqRHchCmL8jomqgwKl0dTjlVLGbdxqDudRIy77oaBw"
              />

              {/* Holographic HUD Crosshairs & Grid Lines */}
              <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start font-mono-data text-[11px] text-[#2fd9f4]/80">
                  <div className="bg-[#061423]/70 px-2.5 py-1 rounded border border-[#2fd9f4]/30">
                    FOV: 94° // OPTICAL STABILIZER: ACTIVE
                  </div>
                  <div className="bg-[#061423]/70 px-2.5 py-1 rounded border border-[#2fd9f4]/30">
                    CALCIFICATION INDEX: 142.6 Agatston
                  </div>
                </div>

                {/* Center Targeting Reticle */}
                <div className="self-center flex items-center justify-center relative w-24 h-24">
                  <div className="absolute inset-0 border border-[#2fd9f4]/30 rounded-full animate-spin [animation-duration:8s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4] shadow-[0_0_10px_#2fd9f4]" />
                  <span className="absolute -bottom-5 font-technical text-[9px] text-[#2fd9f4] tracking-widest">
                    TARGET: LAD_SEGMENT_2
                  </span>
                </div>

                <div className="flex justify-between items-end font-mono-data text-[11px] text-[#bbc9cd]">
                  <div className="bg-[#061423]/70 px-2.5 py-1 rounded border border-[#1E3A4C]">
                    VESSEL DIAMETER: <span className="text-white font-bold">2.84 mm</span>
                  </div>
                  <div className="bg-[#061423]/70 px-2.5 py-1 rounded border border-[#1E3A4C]">
                    FFR PREDICTIVE: <span className="text-[#2fd9f4] font-bold">0.82 (BORDERLINE)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom HUD Quick Tools */}
            <div className="p-3 bg-[#0f1c2c] border-t border-[#1E3A4C] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setContrastInjected(!contrastInjected)}
                  className={`font-technical text-[10px] uppercase tracking-wider px-3 py-1.5 rounded transition-all flex items-center gap-1.5 cursor-pointer ${
                    contrastInjected
                      ? 'bg-[#2fd9f4] text-[#050B14] font-bold shadow-[0_0_12px_#2fd9f4]'
                      : 'bg-[#1e2b3b] text-[#bbc9cd] hover:text-white border border-[#3c494c]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{contrastInjected ? 'Contrast Dye Active' : 'Inject Contrast'}</span>
                </button>

                <div className="flex items-center gap-2 px-3 py-1 bg-[#1e2b3b]/60 rounded border border-[#3c494c]/40">
                  <span className="font-technical text-[10px] text-[#bbc9cd]">Scanner:</span>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={laserIntensity}
                    onChange={(e) => setLaserIntensity(Number(e.target.value))}
                    className="w-20 sm:w-28 h-1.5 bg-[#061423] rounded appearance-none cursor-pointer accent-[#2fd9f4]"
                  />
                  <span className="font-mono-data text-[10px] text-[#2fd9f4]">{laserIntensity}%</span>
                </div>
              </div>

              <div className="font-technical text-[10px] text-[#bbc9cd]/70 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#2fd9f4]" />
                <span>SPATIAL VOXEL ENGINE V2</span>
              </div>
            </div>
          </div>

          {/* Right Telemetry Column (1 Column) */}
          <div className="flex flex-col gap-4">
            {/* Live ECG Vitals Card */}
            <div className="glass-panel p-4 rounded-xl border border-[#1E3A4C]">
              <div className="flex items-center justify-between mb-3 border-b border-[#3c494c]/40 pb-2">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#ff5050] animate-pulse" />
                  <span className="font-display font-bold text-xs text-white uppercase tracking-wider">
                    Vitals Monitor
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-ping" />
                  <span className="font-mono-data text-xs text-[#2fd9f4] font-bold">
                    {heartRate} BPM
                  </span>
                </div>
              </div>

              {/* Sparkline Canvas Waveform */}
              <div className="w-full h-16 bg-[#020f1e] rounded-lg p-1 border border-[#1E3A4C] relative overflow-hidden flex items-end">
                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="25" x2="400" y2="25" stroke="#1E3A4C" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#1E3A4C" strokeWidth="0.5" />
                  <line x1="0" y1="75" x2="400" y2="75" stroke="#1E3A4C" strokeWidth="0.5" />

                  {/* ECG Path */}
                  <path
                    d={ecgData
                      .map((val, i) => `${i === 0 ? 'M' : 'L'} ${i * 10.2} ${100 - val}`)
                      .join(' ')}
                    fill="none"
                    stroke="#2fd9f4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 text-[10px] font-mono-data">
                <div className="p-2 rounded bg-[#061423] border border-[#1E3A4C]">
                  <div className="text-[#bbc9cd]">Blood Pressure</div>
                  <div className="text-white font-bold text-xs mt-0.5">122 / 81 mmHg</div>
                </div>
                <div className="p-2 rounded bg-[#061423] border border-[#1E3A4C]">
                  <div className="text-[#bbc9cd]">SpO2 Saturation</div>
                  <div className="text-[#2fd9f4] font-bold text-xs mt-0.5">99.2%</div>
                </div>
              </div>
            </div>

            {/* Hemodynamics Telemetry Card */}
            <div className="glass-panel p-4 rounded-xl border border-[#1E3A4C] flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3 border-b border-[#3c494c]/40 pb-2">
                <Gauge className="w-4 h-4 text-[#ffae83]" />
                <span className="font-display font-bold text-xs text-white uppercase tracking-wider">
                  Hemodynamics
                </span>
              </div>

              <div className="space-y-3 font-mono-data text-xs">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#bbc9cd]">Coronary Blood Flow</span>
                    <span className="text-white font-bold">142 mL/min</span>
                  </div>
                  <div className="w-full bg-[#061423] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2fd9f4] h-full w-[72%] rounded-full shadow-[0_0_6px_#2fd9f4]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#bbc9cd]">Wall Shear Stress</span>
                    <span className="text-[#ffae83] font-bold">4.2 Pa</span>
                  </div>
                  <div className="w-full bg-[#061423] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#ffae83] h-full w-[55%] rounded-full shadow-[0_0_6px_#ffae83]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#bbc9cd]">Turbulence Index</span>
                    <span className="text-[#ffb4ab] font-bold">28% (Low)</span>
                  </div>
                  <div className="w-full bg-[#061423] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#ffb4ab] h-full w-[28%] rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-[#3c494c]/30">
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded bg-[#1e2b3b] hover:bg-[#2fd9f4] hover:text-[#050B14] font-technical text-xs uppercase tracking-wider text-white border border-[#3c494c] transition-all font-semibold"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
