import React, { useState } from 'react';
import { X, Lock, Mail, UserCheck, Shield, KeyRound } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [instituteId, setInstituteId] = useState('XR-MED-774');
  const [role, setRole] = useState<'clinician' | 'researcher' | 'student'>('clinician');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020f1e]/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#061423] border border-[#1E3A4C] hover:border-[#2fd9f4]/50 rounded-2xl shadow-[0_0_40px_rgba(47,217,244,0.25)] p-6 sm:p-8 flex flex-col gap-6 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#2fd9f4]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#3c494c]/40 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#132030] border border-[#2fd9f4]/40 text-[#2fd9f4]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                Clinical Authentication
              </h2>
              <p className="text-xs text-[#bbc9cd]">CardioViz XR Enterprise Gateway</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#bbc9cd] hover:text-white hover:bg-[#1e2b3b] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-3 gap-1 bg-[#132030] p-1 rounded-lg border border-[#3c494c]/40 text-xs font-technical">
          <button
            type="button"
            onClick={() => setRole('clinician')}
            className={`py-1.5 rounded transition-all ${
              role === 'clinician'
                ? 'bg-[#2fd9f4] text-[#050B14] font-bold shadow-[0_0_10px_#2fd9f4]'
                : 'text-[#bbc9cd] hover:text-white'
            }`}
          >
            Clinician
          </button>
          <button
            type="button"
            onClick={() => setRole('researcher')}
            className={`py-1.5 rounded transition-all ${
              role === 'researcher'
                ? 'bg-[#2fd9f4] text-[#050B14] font-bold shadow-[0_0_10px_#2fd9f4]'
                : 'text-[#bbc9cd] hover:text-white'
            }`}
          >
            Researcher
          </button>
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`py-1.5 rounded transition-all ${
              role === 'student'
                ? 'bg-[#2fd9f4] text-[#050B14] font-bold shadow-[0_0_10px_#2fd9f4]'
                : 'text-[#bbc9cd] hover:text-white'
            }`}
          >
            Academic
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-[11px] font-technical text-[#bbc9cd] uppercase tracking-wider mb-1.5">
              Medical Center / Institutional Email
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 w-4 h-4 text-[#2fd9f4]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dr.smith@cardioviz.med"
                className="w-full bg-[#132030] border border-[#3c494c] focus:border-[#2fd9f4] rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#2fd9f4] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-technical text-[#bbc9cd] uppercase tracking-wider mb-1.5">
              Security Keycode / Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 w-4 h-4 text-[#2fd9f4]" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#132030] border border-[#3c494c] focus:border-[#2fd9f4] rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#2fd9f4] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-technical text-[#bbc9cd] uppercase tracking-wider mb-1.5">
              Institutional Terminal ID
            </label>
            <div className="relative flex items-center">
              <KeyRound className="absolute left-3 w-4 h-4 text-[#ffae83]" />
              <input
                type="text"
                value={instituteId}
                onChange={(e) => setInstituteId(e.target.value)}
                className="w-full bg-[#132030] border border-[#3c494c] rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none font-mono-data"
              />
            </div>
          </div>

          {isSuccess ? (
            <div className="p-3 bg-[#005763] border border-[#2fd9f4] rounded-lg text-center font-technical text-xs text-[#2fd9f4] animate-pulse">
              AUTHENTICATED. REDIRECTING TO XR SESSION...
            </div>
          ) : (
            <button
              type="submit"
              className="mt-2 w-full py-3 bg-[#2fd9f4] hover:bg-[#8aebff] text-[#050B14] font-technical text-xs uppercase tracking-widest font-bold rounded-lg shadow-[0_0_15px_rgba(47,217,244,0.4)] transition-all cursor-pointer active:scale-95"
            >
              Sign In to XR Environment
            </button>
          )}
        </form>

        <div className="text-center text-[10px] text-[#bbc9cd]/60 font-body">
          HIPAA &amp; GDPR Compliant Biomedical Platform // 256-bit Encrypted
        </div>
      </div>
    </div>
  );
};
