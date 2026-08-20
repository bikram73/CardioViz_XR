import React from 'react';
import { NavigationTab } from '../types';
import { ArrowRight, Play, Activity, Sparkles, AlertTriangle, Eye, Layers } from 'lucide-react';

interface HeroViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectStage: (stageId: number) => void;
}

export const HeroView: React.FC<HeroViewProps> = ({
  onNavigate,
  onSelectStage,
}) => {
  return (
    <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
      {/* Cinematic Background Layer with Artery Scanning Graphic */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-3xl">
        <img
          alt="Macroscopic internal view of an artery with red blood cells flowing through, illuminated by a medical cyan scanning laser light"
          className="w-full h-full object-cover opacity-50 mix-blend-screen scale-105 transition-transform duration-1000"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZAr1Jgprd63dMmWdw2oOKAPPtsDveVKmTbWOH8CKKOALI_7b8vrGZPXz4GIRamhxR6VCZi2s9u3hpG3fxtFmM7rY5sGpsmLQScAaRtIomokUzOE3L6O2UFU73xfoR3G57O1-MnxrneFS4e56ABaXvaQFg-edODWLRxLd5BAtoGp1FA3SAykeJ-enq6oRGHp29EBzSw05S99HfUqRHchCmL8jomqgwKl0dTjlVLGbdxqDudRIy77oaBw"
        />
        {/* Soft atmospheric gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/40 to-transparent" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text & Hero CTA */}
        <div className="flex-1 max-w-2xl text-left">
          {/* Status Badge */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-[#2fd9f4]/40 bg-[#132030]/70 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(47,217,244,0.25)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-pulse" />
            <span className="font-technical text-[11px] md:text-xs text-[#2fd9f4] uppercase tracking-widest font-medium">
              See the disease before you feel it
            </span>
          </div>

          {/* Display Headline */}
          <h1
            id="hero-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.1] text-white tracking-tight uppercase mb-6"
          >
            SEE THE DISEASE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2fd9f4] via-[#8aebff] to-[#a2eeff] drop-shadow-[0_0_20px_rgba(47,217,244,0.3)]">
              BEFORE YOU FEEL IT.
            </span>
          </h1>

          {/* Subtext description */}
          <p
            id="hero-description"
            className="font-body text-[#bbc9cd] text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-normal"
          >
            Explore how invisible changes inside an artery can progress from endothelial
            injury to plaque formation, narrowing, rupture, and clot formation through
            high-fidelity XR spatial simulation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="hero-explore-progression-btn"
              onClick={() => onNavigate('pathologies')}
              className="bg-[#2fd9f4] text-[#050B14] font-technical text-xs uppercase tracking-widest font-bold px-8 py-4 rounded hover:bg-[#8aebff] transition-all duration-300 shadow-[0_0_25px_rgba(47,217,244,0.45)] hover:shadow-[0_0_35px_rgba(47,217,244,0.7)] flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
            >
              <span>EXPLORE THE PROGRESSION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-watch-visualization-btn"
              onClick={() => onNavigate('procedures')}
              className="bg-[#132030]/60 backdrop-blur-md border border-[#3c494c] text-[#d6e4f9] font-technical text-xs uppercase tracking-widest px-7 py-4 rounded hover:bg-[#1e2b3b] hover:border-[#2fd9f4]/50 hover:text-[#2fd9f4] transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 group shadow-lg"
            >
              <Play className="w-4 h-4 text-[#2fd9f4] fill-[#2fd9f4]/20 group-hover:fill-[#2fd9f4]" />
              <span>WATCH 60s VISUALIZATION</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-[#1E3A4C]/60 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-[#2fd9f4]">
                4 STAGES
              </div>
              <div className="text-xs text-[#bbc9cd] font-technical tracking-wider mt-0.5">
                Cascade Pathway
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white">
                0.4.2
              </div>
              <div className="text-xs text-[#bbc9cd] font-technical tracking-wider mt-0.5">
                Live Render Engine
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-[#ffae83]">
                XR 3D
              </div>
              <div className="text-xs text-[#bbc9cd] font-technical tracking-wider mt-0.5">
                Volumetric Lumen
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Glassmorphism Data Card */}
        <div className="w-full max-w-md lg:max-w-lg">
          <div
            id="hero-progression-card"
            className="glass-panel p-6 sm:p-7 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-[#2fd9f4]/40 transition-all duration-500"
          >
            {/* Ambient Corner Light Bloom */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#2fd9f4]/15 rounded-full blur-3xl group-hover:bg-[#2fd9f4]/25 transition-all duration-700 pointer-events-none" />

            {/* Card Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#3c494c]/40">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#2fd9f4] shadow-[0_0_8px_#2fd9f4]" />
                <h3 className="font-mono-data text-base text-white tracking-wide">
                  The Progression
                </h3>
              </div>
              <Activity className="w-5 h-5 text-[#2fd9f4]" />
            </div>

            {/* Progression Bars with interactive hover/click triggers */}
            <div className="space-y-5">
              {/* Item 01 */}
              <div
                onClick={() => {
                  onSelectStage(1);
                  onNavigate('procedures');
                }}
                className="p-2.5 rounded-lg hover:bg-[#1e2b3b]/60 transition-colors cursor-pointer group/item flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-data text-xs text-[#2fd9f4] font-bold">
                      01
                    </span>
                    <span className="text-sm font-medium text-[#d6e4f9] group-hover/item:text-[#2fd9f4] transition-colors">
                      Endothelial Injury
                    </span>
                  </div>
                  <span className="text-[10px] font-technical text-[#2fd9f4]/80">
                    STAGE 01
                  </span>
                </div>
                <div className="w-full bg-[#1e2b3b] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#2fd9f4] h-full w-full opacity-80 group-hover/item:opacity-100 transition-opacity shadow-[0_0_8px_#2fd9f4]" />
                </div>
              </div>

              {/* Item 02 */}
              <div
                onClick={() => {
                  onSelectStage(2);
                  onNavigate('procedures');
                }}
                className="p-2.5 rounded-lg hover:bg-[#1e2b3b]/60 transition-colors cursor-pointer group/item flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-data text-xs text-[#ffae83] font-bold">
                      02
                    </span>
                    <span className="text-sm font-medium text-[#d6e4f9] group-hover/item:text-[#ffae83] transition-colors">
                      ApoB Retention
                    </span>
                  </div>
                  <span className="text-[10px] font-technical text-[#ffae83]/80">
                    STAGE 02
                  </span>
                </div>
                <div className="w-full bg-[#1e2b3b] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ffae83] h-full w-3/4 opacity-70 group-hover/item:opacity-100 transition-opacity shadow-[0_0_8px_#ffae83]" />
                </div>
              </div>

              {/* Item 03 */}
              <div
                onClick={() => {
                  onSelectStage(3);
                  onNavigate('procedures');
                }}
                className="p-2.5 rounded-lg hover:bg-[#1e2b3b]/60 transition-colors cursor-pointer group/item flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-data text-xs text-[#ffae83] font-bold">
                      03
                    </span>
                    <span className="text-sm font-medium text-[#d6e4f9] group-hover/item:text-[#ffae83] transition-colors">
                      Plaque Growth
                    </span>
                  </div>
                  <span className="text-[10px] font-technical text-[#ffae83]/80">
                    STAGE 03
                  </span>
                </div>
                <div className="w-full bg-[#1e2b3b] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ffae83] h-full w-1/2 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Item 04 */}
              <div
                onClick={() => {
                  onSelectStage(4);
                  onNavigate('procedures');
                }}
                className="p-2.5 rounded-lg hover:bg-[#93000a]/20 border border-transparent hover:border-[#ffb4ab]/30 transition-all cursor-pointer group/item flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-data text-xs text-[#ffb4ab] font-bold">
                      04
                    </span>
                    <span className="text-sm font-medium text-[#ffb4ab] group-hover/item:text-white transition-colors">
                      Rupture + Clot
                    </span>
                  </div>
                  <span className="text-[10px] font-technical text-[#ffb4ab] font-bold">
                    CRITICAL
                  </span>
                </div>
                <div className="w-full bg-[#1e2b3b] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ffb4ab] h-full w-1/3 shadow-[0_0_12px_rgba(255,180,171,0.9)] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Card Footer Bar */}
            <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#3c494c]/40">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-ping" />
                <span className="font-technical text-[11px] text-[#ffb4ab] uppercase tracking-wider font-semibold">
                  Critical Event Path
                </span>
              </div>
              <span className="font-mono-data text-[10px] text-[#bbc9cd]/60 uppercase tracking-widest">
                TIMELINE_V4
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
