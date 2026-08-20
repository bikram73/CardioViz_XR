import React, { useState } from 'react';
import { SCIENCE_CARDS, CASCADE_STEPS } from '../data/progressionData';
import { ScienceCardData, CascadeStep } from '../types';
import {
  Microscope,
  FlaskConical,
  AlertTriangle,
  HeartPulse,
  Droplet,
  ShieldAlert,
  Sparkles,
  Layers,
  Zap,
  Crosshair,
  ArrowDown,
  Info,
  ChevronRight,
  X,
} from 'lucide-react';

export const EducationView: React.FC = () => {
  const [activeStep, setActiveStep] = useState<CascadeStep | null>(null);

  const getScienceIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Microscope':
        return <Microscope className="w-6 h-6" style={{ color }} />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6" style={{ color }} />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6" style={{ color }} />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" style={{ color }} />;
      default:
        return <Info className="w-6 h-6" style={{ color }} />;
    }
  };

  const getCascadeIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Droplet':
        return <Droplet className="w-8 h-8 mb-2" style={{ color }} />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 mb-2" style={{ color }} />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 mb-2" style={{ color }} />;
      case 'Layers':
        return <Layers className="w-8 h-8 mb-2" style={{ color }} />;
      case 'Zap':
        return <Zap className="w-8 h-8 mb-2" style={{ color }} />;
      case 'Crosshair':
        return <Crosshair className="w-8 h-8 mb-2" style={{ color }} />;
      default:
        return <Droplet className="w-8 h-8 mb-2" style={{ color }} />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-28 pb-16 relative z-10 flex flex-col gap-14">
      {/* Header */}
      <header className="text-center md:text-left flex flex-col gap-3">
        <h1
          id="science-main-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white tracking-tight uppercase leading-tight"
        >
          THE SCIENCE BEHIND <br />
          <span className="text-[#2fd9f4] drop-shadow-[0_0_20px_rgba(47,217,244,0.4)]">
            THE VISUALIZATION
          </span>
        </h1>
        <p className="font-body text-[#bbc9cd] text-sm sm:text-base max-w-2xl md:ml-0 mx-auto leading-relaxed">
          Understanding the cellular and molecular mechanisms driving cardiovascular
          pathology through high-fidelity XR simulation.
        </p>
      </header>

      {/* Scientific Cards Grid (2x2) */}
      <section
        id="scientific-cards-grid"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        {SCIENCE_CARDS.map((card) => (
          <div
            key={card.id}
            id={`science-card-${card.id}`}
            className="glass-panel rounded-2xl p-7 sm:p-8 flex flex-col gap-4 hover:border-[#2fd9f4]/40 biological-glow group relative overflow-hidden transition-all duration-500"
          >
            {/* Background Watermark Glyph */}
            <div
              className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none"
              style={{ color: card.accentColor }}
            >
              {card.id === 'endothelium' && <Microscope className="w-40 h-40" />}
              {card.id === 'apob' && <FlaskConical className="w-40 h-40" />}
              {card.id === 'plaque' && <AlertTriangle className="w-40 h-40" />}
              {card.id === 'thrombus' && <HeartPulse className="w-40 h-40" />}
            </div>

            {/* Header Row */}
            <div className="flex items-center justify-between border-b border-[#3c494c]/40 pb-4 relative z-10">
              <div className="flex items-center gap-3">
                {getScienceIcon(card.icon, card.accentColor)}
                <div>
                  <h2 className="font-display font-bold text-xl text-white">
                    {card.title}
                  </h2>
                  <span className="text-[11px] font-technical text-[#bbc9cd]">
                    {card.subtitle}
                  </span>
                </div>
              </div>
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: card.accentColor,
                  boxShadow: `0 0 10px ${card.accentColor}`,
                }}
              />
            </div>

            {/* Body Text */}
            <p className="font-body text-xs sm:text-sm text-[#bbc9cd] leading-relaxed relative z-10">
              {card.description}
            </p>

            {/* Key Biomarkers / Molecules */}
            <div className="mt-auto pt-3 border-t border-[#3c494c]/30 flex flex-wrap items-center gap-2 relative z-10">
              <span className="text-[10px] font-technical text-[#bbc9cd]/60 uppercase tracking-wider">
                Key Biomarkers:
              </span>
              {card.keyMolecules.map((mol, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono-data px-2 py-0.5 rounded bg-[#1e2b3b]/80 text-[#d6e4f9] border border-[#3c494c]/40"
                >
                  {mol}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Biological Cascade Flow Diagram */}
      <section
        id="pathological-cascade-section"
        className="glass-panel rounded-2xl p-6 sm:p-10 md:p-12 w-full flex flex-col items-center relative overflow-hidden border border-[#1E3A4C]"
      >
        <h3 className="font-technical text-xs sm:text-sm text-[#2fd9f4] uppercase tracking-widest mb-10 sm:mb-12 text-center w-full border-b border-[#3c494c]/40 pb-4 font-bold flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-pulse" />
          Pathological Cascade Diagram
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between w-full relative gap-4 md:gap-2">
          {/* Background Animated Connecting Lines (Desktop) */}
          <svg
            className="hidden md:block absolute top-1/2 left-[5%] w-[90%] h-4 -translate-y-1/2 pointer-events-none z-0"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#1E3A4C"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#2fd9f4"
              strokeWidth="2"
              strokeDasharray="10 10"
              className="pulse-line"
            />
          </svg>

          {/* 6 Cascade Steps */}
          {CASCADE_STEPS.map((step, index) => {
            const isSelected = activeStep?.id === step.id;
            return (
              <React.Fragment key={step.id}>
                <div
                  id={`cascade-step-${step.id}`}
                  onClick={() => setActiveStep(step)}
                  className={`z-10 flex flex-col items-center gap-1.5 bg-[#132030]/90 backdrop-blur-md p-4 rounded-xl border text-center w-36 sm:w-40 h-36 sm:h-40 justify-center cursor-pointer transition-all duration-300 group ${
                    isSelected
                      ? 'border-[#2fd9f4] ring-2 ring-[#2fd9f4] shadow-[0_0_20px_rgba(47,217,244,0.4)] scale-105 bg-[#1e2b3b]'
                      : step.borderClass
                      ? `${step.borderClass} hover:scale-105`
                      : 'border-[#3c494c]/40 hover:border-[#2fd9f4]/60 hover:scale-105'
                  }`}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {getCascadeIcon(step.icon, step.accentColor)}
                  </div>
                  <div
                    className={`font-mono-data text-xs leading-tight ${
                      step.glowClass || 'text-white'
                    }`}
                  >
                    {step.label[0]}
                    {step.label[1] && <br />}
                    {step.label[1]}
                  </div>
                  <span className="text-[9px] font-technical text-[#bbc9cd]/60 mt-1">
                    PHASE 0{step.id}
                  </span>
                </div>

                {/* Mobile downward chevron connector */}
                {index < CASCADE_STEPS.length - 1 && (
                  <ArrowDown className="md:hidden w-5 h-5 text-[#2fd9f4] my-1 animate-bounce" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Cascade Step Modal/Drawer */}
        {activeStep && (
          <div className="mt-8 w-full max-w-2xl bg-[#0f1c2c] border border-[#2fd9f4]/40 rounded-xl p-5 shadow-2xl flex items-start justify-between gap-4 animate-in fade-in duration-200">
            <div className="flex items-start gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${activeStep.accentColor}18` }}
              >
                <Info
                  className="w-5 h-5"
                  style={{ color: activeStep.accentColor }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-data text-sm font-bold text-white">
                    Phase 0{activeStep.id}: {activeStep.label.join(' ')}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#bbc9cd] mt-1 leading-relaxed">
                  {activeStep.detail}
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveStep(null)}
              className="p-1 rounded text-[#bbc9cd] hover:text-white hover:bg-[#1e2b3b]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
