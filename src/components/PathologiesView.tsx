import React, { useState } from 'react';
import { PROGRESSION_STAGES } from '../data/progressionData';
import { ProgressionStage, NavigationTab } from '../types';
import {
  Activity,
  Droplet,
  Sparkles,
  Layers,
  AlertTriangle,
  ChevronRight,
  Maximize2,
  Play,
  CheckCircle2,
  Info,
} from 'lucide-react';

interface PathologiesViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectStage: (stageId: number) => void;
}

export const PathologiesView: React.FC<PathologiesViewProps> = ({
  onNavigate,
  onSelectStage,
}) => {
  const [selectedStageId, setSelectedStageId] = useState<number>(1);
  const currentStage =
    PROGRESSION_STAGES.find((s) => s.id === selectedStageId) ||
    PROGRESSION_STAGES[0];

  const handleStageClick = (id: number) => {
    setSelectedStageId(id);
  };

  const handleLaunchSimulator = (stageId: number) => {
    onSelectStage(stageId);
    onNavigate('procedures');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-28 pb-16 relative z-10 flex flex-col">
      {/* Header */}
      <header className="mb-8 md:mb-10 text-left">
        <p className="font-technical text-xs sm:text-sm text-[#2fd9f4] uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4] animate-pulse" />
          Diagnostic Pathway
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Vascular Disease Progression
        </h1>
        <p className="text-[#bbc9cd] text-sm sm:text-base mt-2 max-w-2xl">
          Visualizing the 4 sequential milestones of atherothrombosis from healthy
          endothelium to fatal lumen occlusion.
        </p>
      </header>

      {/* Main 4-Quadrant Image Visualization Area */}
      <section
        id="pathology-visualizer-section"
        className="w-full relative mb-12 glass-panel rounded-2xl overflow-hidden shadow-2xl border border-[#1E3A4C] group"
      >
        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 bg-[#132030]/90 px-3 py-1.5 rounded-lg border border-[#3c494c]/60 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-ping" />
            <span className="font-technical text-[10px] sm:text-xs text-[#2fd9f4] tracking-widest font-semibold">
              LIVE RENDER V0.4.2
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-[#061423]/80 px-2.5 py-1 rounded text-[11px] font-mono-data text-[#bbc9cd] border border-[#1E3A4C]">
            <span>Active Focus:</span>
            <span className="text-[#2fd9f4] font-bold">Stage 0{selectedStageId}</span>
          </div>
        </div>

        {/* Top Right Quick Launch Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            id="launch-interactive-sim-btn"
            onClick={() => handleLaunchSimulator(selectedStageId)}
            className="bg-[#2fd9f4] text-[#050B14] hover:bg-[#8aebff] font-technical text-[11px] uppercase tracking-wider font-bold px-3.5 py-1.5 rounded shadow-[0_0_15px_rgba(47,217,244,0.4)] flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-[#050B14]" />
            <span className="hidden sm:inline">Launch 3D Explorer</span>
            <span className="sm:hidden">Simulate</span>
          </button>
        </div>

        {/* 4-Stage Medical Graphic */}
        <div className="relative w-full aspect-[16/9] max-h-[64vh] overflow-hidden bg-[#020f1e]">
          <img
            alt="Four stages of vascular disease progression visualized in high resolution 3D"
            className="w-full h-full object-contain sm:object-cover opacity-95 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0sJDTD5lorRYQVm_0gO8ieWOU3khim7rk48nIwn4sjMUXG9XHtisrLU7XwlSNZdOeLoBB72rhT7roT28iVoA5O-3Zlk1_CxbynZPWQ5WqWWz-9lmqiJoQahjNxteliV9QhNGZW0_5WamyxnkWfceFuczrt7UCV98HX5tcQ9rWYJp4ThnUGtrMIEpQidB4EpFpv_zKUxN_8Nl_hikDeSKCeeK8TZRFqCA0qfMnPZI6GlwKQU8MfZUQhA"
          />

          {/* Interactive Quadrant Click Overlay Targets */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            {/* Top Left: Stage 01 */}
            <div
              onClick={() => handleStageClick(1)}
              className={`p-4 sm:p-6 flex flex-col justify-end items-start cursor-pointer transition-all duration-300 ${
                selectedStageId === 1
                  ? 'bg-[#2fd9f4]/15 ring-2 ring-inset ring-[#2fd9f4]'
                  : 'hover:bg-[#2fd9f4]/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`font-technical text-xs px-2.5 py-1 rounded backdrop-blur-md border transition-all ${
                    selectedStageId === 1
                      ? 'text-[#2fd9f4] border-[#2fd9f4] bg-[#132030] shadow-[0_0_10px_#2fd9f4]'
                      : 'text-[#2fd9f4] border-[#2fd9f4]/40 bg-[#132030]/60'
                  }`}
                >
                  STAGE 01
                </span>
                {selectedStageId === 1 && (
                  <span className="text-[10px] font-technical text-white uppercase hidden md:inline">
                    Healthy Artery
                  </span>
                )}
              </div>
            </div>

            {/* Top Right: Stage 02 */}
            <div
              onClick={() => handleStageClick(2)}
              className={`p-4 sm:p-6 flex flex-col justify-end items-end cursor-pointer transition-all duration-300 ${
                selectedStageId === 2
                  ? 'bg-[#ffae83]/15 ring-2 ring-inset ring-[#ffae83]'
                  : 'hover:bg-[#ffae83]/5'
              }`}
            >
              <div className="flex items-center gap-2">
                {selectedStageId === 2 && (
                  <span className="text-[10px] font-technical text-white uppercase hidden md:inline">
                    Lipoprotein Accumulation
                  </span>
                )}
                <span
                  className={`font-technical text-xs px-2.5 py-1 rounded backdrop-blur-md border transition-all ${
                    selectedStageId === 2
                      ? 'text-[#ffae83] border-[#ffae83] bg-[#132030] shadow-[0_0_10px_#ffae83]'
                      : 'text-[#ffae83] border-[#ffae83]/40 bg-[#132030]/60'
                  }`}
                >
                  STAGE 02
                </span>
              </div>
            </div>

            {/* Bottom Left: Stage 03 */}
            <div
              onClick={() => handleStageClick(3)}
              className={`p-4 sm:p-6 flex flex-col justify-end items-start cursor-pointer transition-all duration-300 ${
                selectedStageId === 3
                  ? 'bg-[#ffae83]/15 ring-2 ring-inset ring-[#ffae83]'
                  : 'hover:bg-[#ffae83]/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`font-technical text-xs px-2.5 py-1 rounded backdrop-blur-md border transition-all ${
                    selectedStageId === 3
                      ? 'text-[#ffae83] border-[#ffae83] bg-[#132030] shadow-[0_0_10px_#ffae83]'
                      : 'text-[#ffae83] border-[#ffae83]/40 bg-[#132030]/60'
                  }`}
                >
                  STAGE 03
                </span>
                {selectedStageId === 3 && (
                  <span className="text-[10px] font-technical text-white uppercase hidden md:inline">
                    Plaque Formation
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Right: Stage 04 */}
            <div
              onClick={() => handleStageClick(4)}
              className={`p-4 sm:p-6 flex flex-col justify-end items-end cursor-pointer transition-all duration-300 ${
                selectedStageId === 4
                  ? 'bg-[#93000a]/25 ring-2 ring-inset ring-[#ffb4ab]'
                  : 'hover:bg-[#93000a]/10'
              }`}
            >
              <div className="flex items-center gap-2">
                {selectedStageId === 4 && (
                  <span className="text-[10px] font-technical text-white uppercase hidden md:inline">
                    Plaque Rupture & Thrombus
                  </span>
                )}
                <span
                  className={`font-technical text-xs px-2.5 py-1 rounded backdrop-blur-md border transition-all ${
                    selectedStageId === 4
                      ? 'text-[#ffb4ab] border-[#ffb4ab] bg-[#93000a]/80 shadow-[0_0_15px_rgba(255,180,171,0.8)]'
                      : 'text-[#ffb4ab] border-[#ffb4ab]/40 bg-[#132030]/60'
                  }`}
                >
                  STAGE 04
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Stage Detail Drawer / Info Banner */}
        <div className="bg-[#0f1c2c]/95 border-t border-[#1E3A4C] p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div
              className="p-2 rounded-lg"
              style={{
                backgroundColor: `${currentStage.accentHex}15`,
                border: `1px solid ${currentStage.accentHex}40`,
              }}
            >
              <Activity
                className="w-5 h-5"
                style={{ color: currentStage.accentHex }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="font-mono-data text-sm font-bold"
                  style={{ color: currentStage.accentHex }}
                >
                  {currentStage.stageNumber} {currentStage.name}
                </span>
                <span className="text-[10px] font-technical px-2 py-0.5 rounded bg-[#1e2b3b] text-[#bbc9cd]">
                  {currentStage.subLocation}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#bbc9cd] mt-0.5 max-w-3xl">
                {currentStage.detailedScience}
              </p>
            </div>
          </div>

          <button
            onClick={() => handleLaunchSimulator(currentStage.id)}
            className="w-full md:w-auto self-stretch md:self-auto font-technical text-xs uppercase tracking-wider px-5 py-2.5 rounded text-white bg-[#1e2b3b] hover:bg-[#283646] border border-[#3c494c] hover:border-[#2fd9f4] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Simulate Stage {currentStage.stageNumber}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#2fd9f4]" />
          </button>
        </div>
      </section>

      {/* Horizontal Timeline Data Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
        {/* Stage 1 */}
        <div className="relative flex-grow">
          <div
            id="pathology-card-stage-1"
            onClick={() => handleStageClick(1)}
            className={`glass-panel p-6 rounded-xl flex flex-col gap-3.5 relative overflow-hidden group h-full cursor-pointer transition-all duration-300 ${
              selectedStageId === 1
                ? 'border-[#2fd9f4]/70 shadow-[0_0_20px_rgba(47,217,244,0.25)] bg-[#132030]'
                : 'hover:border-[#2fd9f4]/40 hover:bg-[#132030]/80'
            }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#2fd9f4] glow-cyan opacity-70 group-hover:opacity-100 transition-opacity" />
            <header className="flex justify-between items-start border-b border-[#3c494c]/30 pb-3">
              <div>
                <h3 className="font-mono-data text-sm sm:text-base text-[#2fd9f4] mb-0.5">
                  01 Endothelial Injury
                </h3>
                <p className="font-technical text-[10px] text-[#bbc9cd]">
                  ENDOTHELIAL SURFACE
                </p>
              </div>
              <Droplet className="w-5 h-5 text-[#2fd9f4]" />
            </header>
            <p className="font-body text-xs sm:text-sm text-[#bbc9cd] leading-relaxed">
              Initial irritation or damage to the inner lining of the artery wall,
              compromising the protective barrier and allowing lipid infiltration.
            </p>
            <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-[#bbc9cd]/70 font-mono-data">
              <span>Lumen: 100%</span>
              <span className="text-[#2fd9f4]">Optimal Flow</span>
            </div>
          </div>
          {/* Connector arrow */}
          <div className="hidden xl:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 items-center justify-center text-[#2fd9f4]/40 pointer-events-none">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        {/* Stage 2 */}
        <div className="relative flex-grow">
          <div
            id="pathology-card-stage-2"
            onClick={() => handleStageClick(2)}
            className={`glass-panel p-6 rounded-xl flex flex-col gap-3.5 relative overflow-hidden group h-full cursor-pointer transition-all duration-300 ${
              selectedStageId === 2
                ? 'border-[#ffae83]/70 shadow-[0_0_20px_rgba(255,174,131,0.25)] bg-[#132030]'
                : 'hover:border-[#ffae83]/40 hover:bg-[#132030]/80'
            }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffae83] glow-orange opacity-70 group-hover:opacity-100 transition-opacity" />
            <header className="flex justify-between items-start border-b border-[#3c494c]/30 pb-3">
              <div>
                <h3 className="font-mono-data text-sm sm:text-base text-[#ffae83] mb-0.5">
                  02 ApoB Retention
                </h3>
                <p className="font-technical text-[10px] text-[#bbc9cd]">
                  SUB-INTIMAL SPACE
                </p>
              </div>
              <Sparkles className="w-5 h-5 text-[#ffae83]" />
            </header>
            <p className="font-body text-xs sm:text-sm text-[#bbc9cd] leading-relaxed">
              Apolipoprotein B-containing lipoproteins accumulate in the sub-intimal
              space, triggering an inflammatory cascade and macrophage recruitment.
            </p>
            <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-[#bbc9cd]/70 font-mono-data">
              <span>Lumen: 75%</span>
              <span className="text-[#ffae83]">Atherogenesis</span>
            </div>
          </div>
          {/* Connector arrow */}
          <div className="hidden xl:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 items-center justify-center text-[#2fd9f4]/40 pointer-events-none">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        {/* Stage 3 */}
        <div className="relative flex-grow">
          <div
            id="pathology-card-stage-3"
            onClick={() => handleStageClick(3)}
            className={`glass-panel p-6 rounded-xl flex flex-col gap-3.5 relative overflow-hidden group h-full cursor-pointer transition-all duration-300 ${
              selectedStageId === 3
                ? 'border-[#ffae83]/70 shadow-[0_0_20px_rgba(255,174,131,0.25)] bg-[#132030]'
                : 'hover:border-[#ffae83]/40 hover:bg-[#132030]/80'
            }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffae83] glow-orange opacity-70 group-hover:opacity-100 transition-opacity" />
            <header className="flex justify-between items-start border-b border-[#3c494c]/30 pb-3">
              <div>
                <h3 className="font-mono-data text-sm sm:text-base text-[#ffae83] mb-0.5">
                  03 Plaque Growth
                </h3>
                <p className="font-technical text-[10px] text-[#bbc9cd]">
                  LIPID CORE / FIBROUS CAP
                </p>
              </div>
              <Layers className="w-5 h-5 text-[#ffae83]" />
            </header>
            <p className="font-body text-xs sm:text-sm text-[#bbc9cd] leading-relaxed">
              Formation of a necrotic lipid core covered by a fibrous cap. The growing
              atheroma narrows the arterial lumen, restricting blood flow.
            </p>
            <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-[#bbc9cd]/70 font-mono-data">
              <span>Lumen: 35%</span>
              <span className="text-[#ffae83]">Stenosis</span>
            </div>
          </div>
          {/* Connector arrow */}
          <div className="hidden xl:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 items-center justify-center text-[#2fd9f4]/40 pointer-events-none">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        {/* Stage 4 */}
        <div className="relative flex-grow">
          <div
            id="pathology-card-stage-4"
            onClick={() => handleStageClick(4)}
            className={`glass-panel p-6 rounded-xl flex flex-col gap-3.5 relative overflow-hidden group h-full cursor-pointer transition-all duration-300 ${
              selectedStageId === 4
                ? 'border-[#ffb4ab] shadow-[0_0_25px_rgba(255,180,171,0.35)] bg-[#132030]'
                : 'hover:border-[#ffb4ab]/50 hover:bg-[#132030]/80'
            }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffb4ab] glow-red opacity-80 group-hover:opacity-100 transition-opacity" />
            <header className="flex justify-between items-start border-b border-[#3c494c]/30 pb-3">
              <div>
                <h3 className="font-mono-data text-sm sm:text-base text-[#ffb4ab] mb-0.5">
                  04 Rupture &amp; Clot
                </h3>
                <p className="font-technical text-[10px] text-[#bbc9cd]">
                  THROMBOSIS
                </p>
              </div>
              <AlertTriangle className="w-5 h-5 text-[#ffb4ab]" />
            </header>
            <p className="font-body text-xs sm:text-sm text-[#bbc9cd] leading-relaxed">
              Fibrous cap rupture exposes prothrombotic material to flowing blood,
              inducing rapid platelet aggregation and occlusive thrombus formation.
            </p>
            <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-[#ffb4ab] font-mono-data font-semibold">
              <span>Lumen: 5%</span>
              <span>Acute Infarction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
