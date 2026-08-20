import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { Radio, Menu, X, ShieldAlert, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenGoLive: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenGoLive,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'models', label: 'Models' },
    { id: 'pathologies', label: 'Pathologies' },
    { id: 'procedures', label: 'Procedures' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        id="main-navbar"
        className="w-full flex justify-between items-center px-4 sm:px-8 md:px-12 py-3.5 bg-[#132030]/80 backdrop-blur-xl border-b border-[#3c494c]/40 shadow-2xl transition-all duration-300"
      >
        {/* Brand Logo & Title */}
        <div
          id="navbar-brand-button"
          onClick={() => onSelectTab('models')}
          className="flex items-center gap-3.5 cursor-pointer group select-none"
        >
          {/* Custom SVG Futuristic CardioViz XR emblem */}
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-[#061423] border border-[#2fd9f4]/50 group-hover:border-[#2fd9f4] group-hover:shadow-[0_0_15px_rgba(47,217,244,0.5)] transition-all">
            <svg
              className="w-6 h-6 text-[#2fd9f4] transform group-hover:rotate-45 transition-transform duration-500"
              viewBox="0 0 100 100"
              fill="none"
            >
              {/* Outer Orbit */}
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="22"
                stroke="#2fd9f4"
                strokeWidth="5"
                transform="rotate(-25 50 50)"
                strokeDasharray="180 30"
              />
              {/* Concentric Artery Rings */}
              <circle cx="50" cy="50" r="32" stroke="#d6e4f9" strokeWidth="4" />
              <circle cx="50" cy="50" r="20" stroke="#2fd9f4" strokeWidth="4" />
              <circle cx="50" cy="50" r="8" fill="#2fd9f4" />
              {/* Top diamond node */}
              <polygon points="50,10 54,16 50,22 46,16" fill="#2fd9f4" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#2fd9f4] animate-ping" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-[#2fd9f4] transition-colors">
                CARDIOVIZ
              </span>
              <span className="font-display font-bold text-lg md:text-xl text-[#2fd9f4] tracking-tight">
                XR
              </span>
            </div>
            <span className="text-[9px] font-technical tracking-widest text-[#bbc9cd]/70 uppercase hidden sm:block">
              VASCULAR PATHOLOGY LAB
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 font-technical text-xs tracking-widest text-[#bbc9cd]">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`relative py-1.5 transition-all duration-200 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'text-[#2fd9f4] font-semibold'
                    : 'hover:text-[#2fd9f4]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2fd9f4] shadow-[0_0_8px_#2fd9f4] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            id="nav-go-live-button"
            onClick={onOpenGoLive}
            className="group relative bg-[#2fd9f4] text-[#050B14] font-technical text-xs uppercase tracking-widest font-bold px-5 py-2 rounded shadow-[0_0_15px_rgba(47,217,244,0.4)] hover:bg-[#8aebff] hover:shadow-[0_0_25px_rgba(47,217,244,0.7)] transition-all active:scale-95 flex items-center gap-2"
          >
            <Radio className="w-3.5 h-3.5 text-[#050B14] animate-pulse" />
            <span>Go Live</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#050B14]" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#bbc9cd] hover:text-[#2fd9f4] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#061423]/95 backdrop-blur-2xl border-b border-[#3c494c] px-6 py-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 font-technical text-sm tracking-widest">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded transition-all flex items-center justify-between ${
                  currentTab === item.id
                    ? 'bg-[#132030] text-[#2fd9f4] border border-[#2fd9f4]/30'
                    : 'text-[#bbc9cd] hover:text-[#2fd9f4] hover:bg-[#132030]/50'
                }`}
              >
                <span>{item.label}</span>
                {currentTab === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#3c494c]/50">
            <button
              onClick={() => {
                onOpenGoLive();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center font-technical text-xs uppercase tracking-widest font-bold text-[#050B14] bg-[#2fd9f4] rounded shadow-[0_0_12px_rgba(47,217,244,0.4)] flex items-center justify-center gap-2"
            >
              <Radio className="w-3.5 h-3.5 text-[#050B14] animate-pulse" />
              <span>Go Live XR</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
