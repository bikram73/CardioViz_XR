import React from 'react';
import { NavigationTab } from '../types';
import { PROGRESSION_STAGES } from '../data/progressionData';
import {
  ArrowRight,
  Play,
  Activity,
  Sparkles,
  AlertTriangle,
  Layers,
  Droplets,
  Microscope,
  HeartPulse,
  ChevronRight,
  Gauge,
  Zap,
  ScanLine,
  Radio,
  ShieldAlert,
  Clock,
  ExternalLink,
  FileText,
} from 'lucide-react';

interface HeroViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectStage: (stageId: number) => void;
}

export const HeroView: React.FC<HeroViewProps> = ({
  onNavigate,
  onSelectStage,
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO HEADER SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
        {/* Cinematic Background Layer with Artery Scanning Graphic */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-3xl">
          <img
            alt="Macroscopic internal view of an artery with red blood cells flowing through, illuminated by a medical cyan scanning laser light"
            className="w-full h-full object-cover opacity-45 mix-blend-screen scale-105 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZAr1Jgprd63dMmWdw2oOKAPPtsDveVKmTbWOH8CKKOALI_7b8vrGZPXz4GIRamhxR6VCZi2s9u3hpG3fxtFmM7rY5sGpsmLQScAaRtIomokUzOE3L6O2UFU73xfoR3G57O1-MnxrneFS4e56ABaXvaQFg-edODWLRxLd5BAtoGp1FA3SAykeJ-enq6oRGHp29EBzSw05S99HfUqRHchCmL8jomqgwKl0dTjlVLGbdxqDudRIy77oaBw"
          />
          {/* Soft atmospheric gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/50 to-transparent" />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />

        {/* Main Hero Grid */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Headline & Hero Actions */}
          <div className="flex-1 max-w-2xl text-left">
            {/* Status Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-[#2fd9f4]/40 bg-[#132030]/80 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(47,217,244,0.25)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-pulse" />
              <span className="font-technical text-[11px] md:text-xs text-[#2fd9f4] uppercase tracking-widest font-medium">
                4-Stage Cardiovascular Disease Progression
              </span>
            </div>

            {/* Display Headline */}
            <h1
              id="hero-heading"
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.08] text-white tracking-tight uppercase mb-6"
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
              Cardiovascular disease develops silently across decades. Explore how invisible sub-endothelial damage, ApoB retention, plaque growth, and sudden rupture progress inside the living arterial lumen through real-time 3D spatial simulation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-explore-progression-btn"
                onClick={() => onNavigate('pathologies')}
                className="bg-[#2fd9f4] text-[#050B14] font-technical text-xs uppercase tracking-widest font-bold px-8 py-4 rounded hover:bg-[#8aebff] transition-all duration-300 shadow-[0_0_25px_rgba(47,217,244,0.45)] hover:shadow-[0_0_35px_rgba(47,217,244,0.7)] flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>EXPLORE THE 4 STAGES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-watch-visualization-btn"
                onClick={() => onNavigate('procedures')}
                className="bg-[#132030]/70 backdrop-blur-md border border-[#3c494c] text-[#d6e4f9] font-technical text-xs uppercase tracking-widest px-7 py-4 rounded hover:bg-[#1e2b3b] hover:border-[#2fd9f4]/50 hover:text-[#2fd9f4] transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 group shadow-lg"
              >
                <Play className="w-4 h-4 text-[#2fd9f4] fill-[#2fd9f4]/20 group-hover:fill-[#2fd9f4]" />
                <span>60-SECOND 3D STORY</span>
              </button>
            </div>

            {/* 1-Page Challenge Breakdown Link */}
            <div className="mt-4 flex items-center gap-2">
              <a
                href="/docs/CardioViz_XR_1_Page_Breakdown.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-technical text-[#2fd9f4] hover:text-white bg-[#132030]/60 hover:bg-[#1e2b3b] border border-[#2fd9f4]/30 px-3.5 py-1.5 rounded transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW 1-PAGE CHALLENGE BREAKDOWN (PDF)</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 pt-8 border-t border-[#1E3A4C]/60 grid grid-cols-3 gap-6 max-w-lg">
              <div id="metric-stages">
                <div className="font-display font-bold text-xl sm:text-2xl text-[#2fd9f4]">
                  4 STAGES
                </div>
                <div className="text-xs text-[#bbc9cd] font-technical tracking-wider mt-0.5">
                  Vascular Cascade
                </div>
              </div>
              <div id="metric-duration">
                <div className="font-display font-bold text-xl sm:text-2xl text-white">
                  60s 3D
                </div>
                <div className="text-xs text-[#bbc9cd] font-technical tracking-wider mt-0.5">
                  Cinematic Mode
                </div>
              </div>
              <div id="metric-fidelity">
                <div className="font-display font-bold text-xl sm:text-2xl text-[#ffae83]">
                  REAL-TIME
                </div>
                <div className="text-xs text-[#bbc9cd] font-technical tracking-wider mt-0.5">
                  Particle Physics
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Progression Status Card */}
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
                    The Progression Matrix
                  </h3>
                </div>
                <Activity className="w-5 h-5 text-[#2fd9f4]" />
              </div>

              {/* Progression Bars with interactive hover/click triggers */}
              <div className="space-y-4">
                {PROGRESSION_STAGES.map((stage) => {
                  const isStage4 = stage.id === 4;
                  const isStage1 = stage.id === 1;
                  const accent = stage.accentHex;
                  return (
                    <div
                      key={stage.id}
                      id={`hero-stage-item-${stage.id}`}
                      onClick={() => {
                        onSelectStage(stage.id);
                        onNavigate('procedures');
                      }}
                      className={`p-3 rounded-lg border transition-all cursor-pointer group/item flex flex-col gap-1.5 ${
                        isStage4
                          ? 'bg-[#93000a]/15 border-[#ffb4ab]/20 hover:border-[#ffb4ab]/60 hover:bg-[#93000a]/25'
                          : 'bg-[#132030]/50 border-[#3c494c]/30 hover:border-[#2fd9f4]/40 hover:bg-[#1e2b3b]/70'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="font-mono-data text-xs font-bold"
                            style={{ color: accent }}
                          >
                            {stage.stageNumber}
                          </span>
                          <span className="text-sm font-medium text-[#d6e4f9] group-hover/item:text-white transition-colors">
                            {stage.shortName}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span
                            className="text-[10px] font-technical uppercase font-bold"
                            style={{ color: accent }}
                          >
                            {isStage4 ? 'CRITICAL (95% OCCLUSION)' : `STAGE ${stage.stageNumber}`}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#bbc9cd] group-hover/item:translate-x-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-[#0b1622] h-1.5 rounded-full overflow-hidden mt-1">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width:
                              stage.id === 1
                                ? '100%'
                                : stage.id === 2
                                ? '75%'
                                : stage.id === 3
                                ? '45%'
                                : '15%',
                            backgroundColor: accent,
                            boxShadow: `0 0 8px ${accent}`,
                          }}
                        />
                      </div>

                      {/* Micro Summary */}
                      <p className="text-[11px] text-[#bbc9cd]/80 leading-tight mt-0.5 line-clamp-1 font-body">
                        {stage.subLocation} • {stage.riskLevel}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer Bar */}
              <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#3c494c]/40">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-ping" />
                  <span className="font-technical text-[11px] text-[#2fd9f4] uppercase tracking-wider font-semibold">
                    Interactive 3D Ready
                  </span>
                </div>
                <span className="font-mono-data text-[10px] text-[#bbc9cd]/60 uppercase tracking-widest">
                  CLICK ANY STAGE TO SIMULATE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE 4-STAGE VASCULAR PROGRESSION SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      <section
        id="landing-progression-section"
        className="relative py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full border-t border-[#1E3A4C]/50"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-[#2fd9f4]/30 bg-[#132030]/60 rounded-full">
              <Activity className="w-3.5 h-3.5 text-[#2fd9f4]" />
              <span className="font-technical text-[11px] text-[#2fd9f4] uppercase tracking-widest">
                Pathological Cascade
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase">
              The Four Stages of Disease
            </h2>
            <p className="font-body text-[#bbc9cd] text-sm sm:text-base mt-2 max-w-2xl">
              From microscopic biochemical insults on the endothelium to sudden thrombotic occlusion, follow the chronological timeline of atheroma progression.
            </p>
          </div>

          <button
            onClick={() => onNavigate('pathologies')}
            className="self-start md:self-auto font-technical text-xs text-[#2fd9f4] hover:text-[#8aebff] uppercase tracking-wider flex items-center gap-1.5 group cursor-pointer"
          >
            <span>View Full Pathological Atlas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRESSION_STAGES.map((stage) => {
            const isCritical = stage.id === 4;
            const accent = stage.accentHex;

            return (
              <div
                key={stage.id}
                id={`landing-stage-card-${stage.id}`}
                className={`glass-panel rounded-xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] group ${
                  isCritical
                    ? 'border-[#ffb4ab]/30 hover:border-[#ffb4ab]/60 hover:shadow-[0_0_30px_rgba(255,180,171,0.15)]'
                    : 'border-[#3c494c]/40 hover:border-[#2fd9f4]/50 hover:shadow-[0_0_30px_rgba(47,217,244,0.1)]'
                }`}
              >
                {/* Accent Top Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all"
                  style={{ backgroundColor: accent }}
                />

                <div>
                  {/* Stage Number & Risk Level */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono-data text-2xl font-bold"
                      style={{ color: accent }}
                    >
                      {stage.stageNumber}
                    </span>
                    <span
                      className={`text-[10px] font-technical font-bold uppercase px-2.5 py-0.5 rounded ${
                        isCritical
                          ? 'bg-[#93000a]/40 text-[#ffb4ab] border border-[#ffb4ab]/40'
                          : 'bg-[#1e2b3b] text-[#bbc9cd] border border-[#3c494c]/40'
                      }`}
                    >
                      {stage.riskLevel}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-[#2fd9f4] transition-colors mb-1.5">
                    {stage.shortName}
                  </h3>

                  {/* Anatomical Sub-Location */}
                  <div className="font-technical text-[11px] text-[#bbc9cd]/70 uppercase tracking-wider mb-3">
                    {stage.subLocation}
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs text-[#bbc9cd] leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-[#3c494c]/30">
                    <div className="bg-[#0b1622]/60 p-2 rounded border border-[#3c494c]/20">
                      <div className="text-[10px] font-technical text-[#bbc9cd]/60 uppercase">
                        Occlusion
                      </div>
                      <div
                        className="font-mono-data text-sm font-bold mt-0.5"
                        style={{ color: accent }}
                      >
                        {stage.lumenOcclusion}%
                      </div>
                    </div>
                    <div className="bg-[#0b1622]/60 p-2 rounded border border-[#3c494c]/20">
                      <div className="text-[10px] font-technical text-[#bbc9cd]/60 uppercase">
                        Shear Stress
                      </div>
                      <div className="font-mono-data text-sm font-bold text-white mt-0.5">
                        {stage.shearStress} Pa
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    id={`stage-card-sim-btn-${stage.id}`}
                    onClick={() => {
                      onSelectStage(stage.id);
                      onNavigate('procedures');
                    }}
                    className="flex-1 bg-[#132030] hover:bg-[#2fd9f4] text-[#d6e4f9] hover:text-[#050B14] font-technical text-[11px] uppercase tracking-wider font-semibold py-2 px-3 rounded border border-[#3c494c]/40 hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>3D Sim</span>
                  </button>
                  <button
                    id={`stage-card-deepdive-btn-${stage.id}`}
                    onClick={() => {
                      onSelectStage(stage.id);
                      onNavigate('pathologies');
                    }}
                    className="p-2 rounded bg-[#0b1622]/80 hover:bg-[#1e2b3b] text-[#bbc9cd] hover:text-white border border-[#3c494c]/30 transition-colors cursor-pointer"
                    title="Read pathology details"
                  >
                    <Microscope className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THE "SILENT DISEASE" CLINICAL PROBLEM & PATIENT INSIGHT
      ───────────────────────────────────────────────────────────── */}
      <section
        id="landing-silent-disease-section"
        className="relative py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full border-t border-[#1E3A4C]/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: The Problem Statement */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#ffae83]/40 bg-[#132030]/60 rounded-full">
              <ShieldAlert className="w-3.5 h-3.5 text-[#ffae83]" />
              <span className="font-technical text-[11px] text-[#ffae83] uppercase tracking-widest font-medium">
                The Clinical Paradox
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase leading-tight">
              Why You Don’t Feel It <br />
              <span className="text-[#ffae83]">Until It’s Almost Too Late</span>
            </h2>

            <p className="font-body text-[#bbc9cd] text-sm sm:text-base leading-relaxed">
              Arteries expand outward (positive remodeling) during early plaque accumulation to preserve lumen diameter. A patient can have extensive, vulnerable atheroma with <strong>zero symptoms</strong> and unhindered blood flow until sudden cap rupture occurs.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#132030]/50 border border-[#3c494c]/40">
                <div className="w-8 h-8 rounded-lg bg-[#2fd9f4]/15 border border-[#2fd9f4]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Gauge className="w-4 h-4 text-[#2fd9f4]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-white">
                    The 70% Stenosis Threshold
                  </h4>
                  <p className="font-body text-xs text-[#bbc9cd] mt-0.5 leading-relaxed">
                    Angina and chest pain typically only occur once lumen narrowing surpasses 70%. Yet over <strong>60% of heart attacks</strong> originate from non-obstructive plaques (&lt;50% stenosis) that rupture unpredictably.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#132030]/50 border border-[#3c494c]/40">
                <div className="w-8 h-8 rounded-lg bg-[#ffd4bf]/15 border border-[#ffd4bf]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Droplets className="w-4 h-4 text-[#ffd4bf]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-white">
                    ApoB vs. Standard Cholesterol
                  </h4>
                  <p className="font-body text-xs text-[#bbc9cd] mt-0.5 leading-relaxed">
                    Standard lipid panels measure cholesterol mass (LDL-C), not the actual particle count. Each atherogenic particle carries exactly one <strong>Apolipoprotein B (ApoB)</strong> molecule, making ApoB the true causal driver of plaque trapping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Comparison Diagram */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#3c494c]/40 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#3c494c]/40">
                <h3 className="font-mono-data text-sm sm:text-base text-white">
                  Lumen Remodeling vs. Risk Curve
                </h3>
                <span className="text-[10px] font-technical text-[#2fd9f4] uppercase tracking-widest px-2.5 py-1 bg-[#132030] rounded border border-[#2fd9f4]/30">
                  Glagov Phenomenon
                </span>
              </div>

              {/* Visual Diagram */}
              <div className="space-y-6">
                {/* Phase 1: Silent Remodeling */}
                <div className="p-4 rounded-xl bg-[#0b1622]/80 border border-[#2fd9f4]/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono-data text-xs text-[#2fd9f4] font-bold">
                      Early Phase (Stages 01–02)
                    </span>
                    <span className="text-[11px] font-technical text-[#2fd9f4]">
                      0% SYMPTOMS
                    </span>
                  </div>
                  <div className="w-full bg-[#1e2b3b] h-3 rounded-full overflow-hidden flex">
                    <div className="bg-[#2fd9f4] h-full w-4/5" title="Patent Lumen" />
                    <div className="bg-[#ffae83] h-full w-1/5 opacity-80" title="Sub-intimal Plaque" />
                  </div>
                  <div className="flex justify-between text-[10px] font-technical text-[#bbc9cd] mt-1.5">
                    <span>Lumen Area: Preserved (Compensatory Dilation)</span>
                    <span>Blood Flow: Normal</span>
                  </div>
                </div>

                {/* Phase 2: Critical Stenosis & Rupture Risk */}
                <div className="p-4 rounded-xl bg-[#0b1622]/80 border border-[#ffb4ab]/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono-data text-xs text-[#ffb4ab] font-bold">
                      Advanced Phase (Stages 03–04)
                    </span>
                    <span className="text-[11px] font-technical text-[#ffb4ab] font-bold">
                      ACUTE THREAT
                    </span>
                  </div>
                  <div className="w-full bg-[#1e2b3b] h-3 rounded-full overflow-hidden flex">
                    <div className="bg-[#2fd9f4] h-full w-1/5" title="Severely Constricted Lumen" />
                    <div className="bg-[#ffae83] h-full w-2/5 opacity-90" title="Necrotic Core" />
                    <div className="bg-[#ffb4ab] h-full w-2/5 animate-pulse" title="Thrombus Occlusion" />
                  </div>
                  <div className="flex justify-between text-[10px] font-technical text-[#ffb4ab] mt-1.5">
                    <span>Lumen Area: 65%–95% Occluded</span>
                    <span>High Shear Trigger: Plaque Fissure</span>
                  </div>
                </div>
              </div>

              {/* Callout box */}
              <div className="mt-6 pt-5 border-t border-[#3c494c]/40 flex items-center justify-between gap-4">
                <p className="text-xs text-[#bbc9cd] font-body leading-relaxed">
                  Interactive spatial 3D visualization allows patients and learners to observe this hidden danger before symptoms emerge.
                </p>
                <button
                  onClick={() => onNavigate('education')}
                  className="shrink-0 bg-[#1e2b3b] hover:bg-[#2fd9f4] text-[#d6e4f9] hover:text-[#050B14] px-4 py-2 rounded text-xs font-technical uppercase font-bold tracking-wider transition-all"
                >
                  Deep Dive
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. 60-SECOND CINEMATIC EXPERIENCE TIMELINE
      ───────────────────────────────────────────────────────────── */}
      <section
        id="landing-60s-experience-section"
        className="relative py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full border-t border-[#1E3A4C]/50"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 border border-[#2fd9f4]/40 bg-[#132030]/80 rounded-full">
            <Clock className="w-3.5 h-3.5 text-[#2fd9f4]" />
            <span className="font-technical text-[11px] text-[#2fd9f4] uppercase tracking-widest font-medium">
              60-Second Storyboard &amp; Patient Animation
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase">
            The 60-Second Guided Journey
          </h2>
          <p className="font-body text-[#bbc9cd] text-sm sm:text-base mt-2">
            A clear visual narrative showing exactly how a healthy artery silently transforms into a sudden blockage in four easy-to-understand stages.
          </p>
          <div className="inline-block mt-3 text-[11px] font-technical uppercase tracking-wider text-[#bbc9cd]/70 bg-[#132030]/60 px-3 py-1 rounded border border-[#3c494c]/40">
            * Illustrative progression — not a clinical measurement
          </div>
        </div>

        {/* Timeline 6 Step Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="glass-panel p-5 rounded-xl border border-[#2fd9f4]/30 relative">
            <div className="font-mono-data text-xs text-[#2fd9f4] font-bold mb-2">
              00:00 – 00:08
            </div>
            <h4 className="font-display text-base font-semibold text-white mb-1.5">
              1. Healthy Artery
            </h4>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              Blood cells glide freely through a wide, flexible artery with a pristine, non-stick inner lining.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-[#2fd9f4]/40 relative">
            <div className="font-mono-data text-xs text-[#2fd9f4] font-bold mb-2">
              00:08 – 00:20
            </div>
            <h4 className="font-display text-base font-semibold text-white mb-1.5">
              2. Endothelial Injury
            </h4>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              Irritation from blood pressure or stress creates microscopic cracks in the artery's protective shield.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-[#ffd4bf]/40 relative">
            <div className="font-mono-data text-xs text-[#ffd4bf] font-bold mb-2">
              00:20 – 00:34
            </div>
            <h4 className="font-display text-base font-semibold text-white mb-1.5">
              3. ApoB Particles Trapped
            </h4>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              Bad cholesterol particles (ApoB) slip through the cracks and get stuck inside the wall, triggering swelling.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-[#ffae83]/40 relative">
            <div className="font-mono-data text-xs text-[#ffae83] font-bold mb-2">
              00:34 – 00:49
            </div>
            <h4 className="font-display text-base font-semibold text-white mb-1.5">
              4. Plaque Grows &amp; Narrows
            </h4>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              A fatty lump builds up under a thin cap. As it expands, the bloodway gets squeezed and flow speeds up.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-[#ffb4ab]/40 relative bg-[#93000a]/10">
            <div className="font-mono-data text-xs text-[#ffb4ab] font-bold mb-2">
              00:49 – 01:02
            </div>
            <h4 className="font-display text-base font-semibold text-[#ffb4ab] mb-1.5">
              5. The Plaque Tears Open
            </h4>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              Under high pressure, the fragile cap cracks open, exposing the fatty core directly to passing blood.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-[#ffb4ab]/60 relative bg-[#93000a]/20 shadow-[0_0_15px_rgba(255,180,171,0.2)]">
            <div className="font-mono-data text-xs text-[#ffb4ab] font-bold mb-2">
              01:02 – 01:10
            </div>
            <h4 className="font-display text-base font-semibold text-[#ffb4ab] mb-1.5">
              6. A Clot Rapidly Forms
            </h4>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              Sticky blood platelets rush in within seconds, forming an instant clot that blocks oxygen to the heart.
            </p>
          </div>
        </div>

        {/* Launch 60s Experience Banner */}
        <div className="mt-10 text-center">
          <button
            id="landing-launch-60s-btn"
            onClick={() => onNavigate('procedures')}
            className="inline-flex items-center gap-3 bg-[#2fd9f4] text-[#050B14] font-technical text-xs uppercase tracking-widest font-bold px-8 py-4 rounded hover:bg-[#8aebff] transition-all shadow-[0_0_25px_rgba(47,217,244,0.4)] cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Watch 60-Second Interactive Story</span>
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. INTERACTIVE 3D & XR SIMULATION CAPABILITIES
      ───────────────────────────────────────────────────────────── */}
      <section
        id="landing-tech-section"
        className="relative py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full border-t border-[#1E3A4C]/50"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-[#2fd9f4]/30 bg-[#132030]/60 rounded-full">
              <Layers className="w-3.5 h-3.5 text-[#2fd9f4]" />
              <span className="font-technical text-[11px] text-[#2fd9f4] uppercase tracking-widest">
                Real-Time Simulation Engine
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase">
              Interactive Spatial Architecture
            </h2>
            <p className="font-body text-[#bbc9cd] text-sm sm:text-base mt-2 max-w-2xl">
              Engineered with WebGL & Three.js shader pipelines for medically rigorous hemodynamic physics and cellular rendering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-xl border border-[#3c494c]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#2fd9f4]/15 border border-[#2fd9f4]/30 flex items-center justify-center mb-4">
                <ScanLine className="w-5 h-5 text-[#2fd9f4]" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                Volumetric Lumen & Shaders
              </h3>
              <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
                Custom vertex and fragment shaders render dynamic arterial wall elasticity, stenosis curvature deformation, and laser scan line overlays.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3c494c]/30 font-technical text-[11px] text-[#2fd9f4]">
              Three.js ShaderMaterial • WebGL 2.0
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-[#3c494c]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#ffd4bf]/15 border border-[#ffd4bf]/30 flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5 text-[#ffd4bf]" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                Instanced Cellular Physics
              </h3>
              <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
                Thousands of biconcave red blood cells and spherical ApoB lipoproteins calculated in real-time with parabolic Poiseuille velocity profiles.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3c494c]/30 font-technical text-[11px] text-[#ffd4bf]">
              InstancedMesh • 60 FPS Laminar Flow
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-[#3c494c]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#ffae83]/15 border border-[#ffae83]/30 flex items-center justify-center mb-4">
                <Radio className="w-5 h-5 text-[#ffae83]" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                VR180 / XR Ready Telemetry
              </h3>
              <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
                Immersive stereoscopic viewport modes with real-time biometric HUD overlay for medical instruction and patient consultations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3c494c]/30 font-technical text-[11px] text-[#ffae83]">
              Immersive HUD • Spatial Optics
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CLINICAL BIOMARKERS GLOSSARY
      ───────────────────────────────────────────────────────────── */}
      <section
        id="landing-biomarkers-section"
        className="relative py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full border-t border-[#1E3A4C]/50"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-[#2fd9f4]/30 bg-[#132030]/60 rounded-full">
            <Microscope className="w-3.5 h-3.5 text-[#2fd9f4]" />
            <span className="font-technical text-[11px] text-[#2fd9f4] uppercase tracking-widest">
              Diagnostic Precision
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase">
            Essential Biomarkers Glossary
          </h2>
          <p className="font-body text-[#bbc9cd] text-sm sm:text-base mt-2">
            The quantitative diagnostic indices that inform disease staging and clinical risk stratification.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-5 rounded-xl border border-[#3c494c]/40">
            <div className="font-mono-data text-xs text-[#2fd9f4] font-bold mb-1">
              ApoB Particle Count
            </div>
            <div className="text-xs text-[#bbc9cd]/70 font-technical mb-3">
              Target: &lt;80 mg/dL (High Risk: &lt;65)
            </div>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              Total count of all atherogenic particles (LDL, VLDL, IDL, Lp(a)). Direct driver of sub-endothelial trapping rate.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-[#3c494c]/40">
            <div className="font-mono-data text-xs text-[#ffd4bf] font-bold mb-1">
              hs-CRP (Inflammation)
            </div>
            <div className="text-xs text-[#bbc9cd]/70 font-technical mb-3">
              Target: &lt;1.0 mg/L (Optimal)
            </div>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              High-sensitivity C-reactive protein measures vascular systemic inflammation and plaque instability risk.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-[#3c494c]/40">
            <div className="font-mono-data text-xs text-[#ffae83] font-bold mb-1">
              CAC (Coronary Calcium)
            </div>
            <div className="text-xs text-[#bbc9cd]/70 font-technical mb-3">
              Target: 0 Agatston Units
            </div>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              Quantifies calcified hydroxyapatite volume in the coronary tree via non-contrast CT, confirming plaque presence.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-[#ffb4ab]/40">
            <div className="font-mono-data text-xs text-[#ffb4ab] font-bold mb-1">
              FFR (Flow Reserve)
            </div>
            <div className="text-xs text-[#bbc9cd]/70 font-technical mb-3">
              Ischemia Cutoff: ≤ 0.80
            </div>
            <p className="font-body text-xs text-[#bbc9cd] leading-relaxed">
              Fractional Flow Reserve determines whether an anatomical stenosis causes hemodynamic myocardial ischemia.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. BOTTOM CALL TO ACTION BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full mb-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-[#2fd9f4]/40 relative overflow-hidden text-center bg-gradient-to-b from-[#132030]/80 to-[#050B14]">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2fd9f4]/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
            Step Inside the Artery Today
          </h3>
          <p className="font-body text-[#bbc9cd] text-sm sm:text-base max-w-xl mx-auto mb-8">
            Experience the interactive 3D simulation, manipulate hemodynamic controls in real time, and explore the complete cellular science.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('procedures')}
              className="w-full sm:w-auto bg-[#2fd9f4] text-[#050B14] font-technical text-xs uppercase tracking-widest font-bold px-8 py-4 rounded hover:bg-[#8aebff] transition-all shadow-[0_0_25px_rgba(47,217,244,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Launch 3D Explorer</span>
            </button>
            <button
              onClick={() => onNavigate('education')}
              className="w-full sm:w-auto bg-[#1e2b3b]/70 hover:bg-[#1e2b3b] text-white font-technical text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded border border-[#3c494c] hover:border-[#2fd9f4]/50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Microscope className="w-4 h-4 text-[#2fd9f4]" />
              <span>Explore The Science</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

