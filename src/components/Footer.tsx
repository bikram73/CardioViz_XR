import React, { useState } from 'react';
import { ShieldCheck, FileText, Mail, BookOpen, X, Check, Copy, Sparkles, Activity } from 'lucide-react';

interface ModalData {
  title: string;
  category: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('research@cardioviz-xr.med');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const openPrivacy = () => {
    setActiveModal({
      title: 'Privacy & Data Governance Policy',
      category: 'Compliance & Security',
      icon: <ShieldCheck className="w-5 h-5 text-[#2fd9f4]" />,
      content: (
        <div className="space-y-3 text-xs text-[#bbc9cd] leading-relaxed">
          <p>
            <strong className="text-white">HIPAA &amp; GDPR Compliant:</strong> CardioViz XR operates as a local client-side medical visualization engine. No Protected Health Information (PHI) or personal patient identifiers are ingested, stored, or transmitted to remote cloud databases.
          </p>
          <div className="bg-[#0c1e30] p-3 rounded-lg border border-[#1e3a4c] space-y-1.5">
            <div className="text-white font-semibold text-[11px] uppercase tracking-wider text-[#2fd9f4]">Telemetry &amp; Local Cache</div>
            <p className="text-[11px]">
              Spatial interaction coordinates, 3D rotation angles, and timeline slider states are stored strictly in volatile local memory during your active exploration session.
            </p>
          </div>
          <p>
            For institutional deployments across university medical centers and teaching hospitals, custom air-gapped on-premise configurations are supported.
          </p>
        </div>
      ),
    });
  };

  const openTerms = () => {
    setActiveModal({
      title: 'Terms of Medical Service & Research License',
      category: 'Licensing & Clinical Scope',
      icon: <FileText className="w-5 h-5 text-[#2fd9f4]" />,
      content: (
        <div className="space-y-3 text-xs text-[#bbc9cd] leading-relaxed">
          <p>
            <strong className="text-white">Academic &amp; Clinical Simulation Scope:</strong> CardioViz XR is engineered for computational vascular pathology education, spatial anatomy simulation, and procedural training.
          </p>
          <ul className="list-disc pl-4 space-y-1.5 text-[11px]">
            <li>Hemodynamic fluid calculations (Poiseuille law, wall shear stress) are based on validated biomedical models for instructional purposes.</li>
            <li>This platform serves as an adjunctive educational tool and is not certified as a primary standalone diagnostic medical device.</li>
            <li>Clinical decision-making must always adhere to accredited institutional cardiology guidelines and board-certified physician oversight.</li>
          </ul>
        </div>
      ),
    });
  };

  const openEthics = () => {
    setActiveModal({
      title: 'Biomedical Ethics & Scientific Integrity',
      category: 'Research Standards',
      icon: <Activity className="w-5 h-5 text-[#2fd9f4]" />,
      content: (
        <div className="space-y-3 text-xs text-[#bbc9cd] leading-relaxed">
          <p>
            <strong className="text-white">Evidence-Based Modeling:</strong> Our 4-stage atherosclerosis progression models are cross-referenced with peer-reviewed literature from the American College of Cardiology (ACC) and European Society of Cardiology (ESC).
          </p>
          <div className="grid grid-cols-2 gap-2 text-[11px] mt-2">
            <div className="bg-[#0c1e30] p-2.5 rounded border border-[#1e3a4c]">
              <span className="text-[#2fd9f4] font-semibold block">ApoB Retention</span>
              Trans-endothelial lipid entrapment rates modeled per modern lipidology standards.
            </div>
            <div className="bg-[#0c1e30] p-2.5 rounded border border-[#1e3a4c]">
              <span className="text-[#2fd9f4] font-semibold block">Plaque Rupture</span>
              Thin-cap fibroatheroma (TCFA) mechanics and shear stress triggers.
            </div>
          </div>
        </div>
      ),
    });
  };

  const openContact = () => {
    setActiveModal({
      title: 'Vascular Pathology Modeling Lab',
      category: 'Contact Research Team',
      icon: <Mail className="w-5 h-5 text-[#2fd9f4]" />,
      content: (
        <div className="space-y-3 text-xs text-[#bbc9cd] leading-relaxed">
          <p>
            Connect with our computational biomechanics team, cardiovascular researchers, and XR development group for collaboration, institutional trials, or dataset inquiries.
          </p>
          <div className="bg-[#0c1e30] p-3 rounded-lg border border-[#1e3a4c] flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#bbc9cd]/70 font-technical">Direct Research Desk</div>
              <div className="text-white font-mono text-xs sm:text-sm font-semibold">research@cardioviz-xr.med</div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#2fd9f4]/15 hover:bg-[#2fd9f4]/25 text-[#2fd9f4] border border-[#2fd9f4]/40 rounded text-xs font-technical uppercase tracking-wider transition-colors cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="text-[11px] text-[#bbc9cd]/70">
            📍 Centers: Boston BioMedical Corridor | London Cardiovascular Digital Innovation Hub
          </div>
        </div>
      ),
    });
  };

  const openBreakdown = () => {
    setActiveModal({
      title: 'CardioViz XR — Executive Technical Breakdown',
      category: '1-Page Architecture Overview',
      icon: <Sparkles className="w-5 h-5 text-[#2fd9f4]" />,
      content: (
        <div className="space-y-3 text-xs text-[#bbc9cd] leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
          <div className="bg-[#0c1e30] p-3 rounded-lg border border-[#2fd9f4]/30 space-y-1">
            <div className="text-white font-bold text-xs">Core Innovation: Real-Time Multimodal Cardiovascular XR</div>
            <p className="text-[11px] text-[#bbc9cd]">
              Unifying 3D spatial coronary anatomical exploration, interactive 4-stage atherosclerosis cellular simulation, and WebXR immersive stereo rendering into a zero-latency web application.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold text-[11px] uppercase tracking-wider text-[#2fd9f4]">Technical Architecture Highlights</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="bg-[#061423] p-2.5 rounded border border-[#1e3a4c]">
                <strong className="text-white block mb-0.5">1. WebGL &amp; Three.js</strong>
                60FPS rendering of LAD, LCx, RCA with dynamic vessel highlight and hemodynamics.
              </div>
              <div className="bg-[#061423] p-2.5 rounded border border-[#1e3a4c]">
                <strong className="text-white block mb-0.5">2. 2D Particle Physics</strong>
                Live erythrocyte deformation, ApoB sub-endothelial aggregation, and thrombus meshing.
              </div>
              <div className="bg-[#061423] p-2.5 rounded border border-[#1e3a4c]">
                <strong className="text-white block mb-0.5">3. Multi-Layer Slicing</strong>
                Instant toggle for Endothelium, Lipids, Plaque, Blood Flow, and Clot layers.
              </div>
              <div className="bg-[#061423] p-2.5 rounded border border-[#1e3a4c]">
                <strong className="text-white block mb-0.5">4. WebXR Ready</strong>
                Stereoscopic HUD, spatial scale inspection, and immersive hands-free examination.
              </div>
            </div>
          </div>
        </div>
      ),
    });
  };

  return (
    <footer id="main-footer" className="relative w-full flex flex-col items-center gap-4 text-center bg-[#020f1e] py-8 px-4 sm:px-12 border-t border-[#1E3A4C] text-xs font-body text-[#bbc9cd] z-10 mt-auto">
      <div id="footer-brand" className="font-display font-bold text-lg sm:text-xl text-white tracking-wider mb-1 flex items-center gap-2">
        <span className="text-[#2fd9f4]">CARDIOVIZ</span> XR
      </div>

      <div id="footer-navigation-links" className="flex flex-wrap justify-center gap-6 sm:gap-8 font-technical text-[11px] uppercase tracking-widest text-[#bbc9cd]">
        <button
          id="btn-footer-privacy"
          onClick={openPrivacy}
          className="hover:text-[#2fd9f4] transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
        >
          Privacy Policy
        </button>
        <button
          id="btn-footer-terms"
          onClick={openTerms}
          className="hover:text-[#2fd9f4] transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
        >
          Terms of Service
        </button>
        <button
          id="btn-footer-ethics"
          onClick={openEthics}
          className="hover:text-[#2fd9f4] transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
        >
          Ethical Standards
        </button>
        <button
          id="btn-footer-contact"
          onClick={openContact}
          className="hover:text-[#2fd9f4] transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
        >
          Contact Research
        </button>
        <button
          id="btn-footer-breakdown"
          onClick={openBreakdown}
          className="text-[#2fd9f4] hover:text-[#5ce4fa] transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none font-semibold"
        >
          <Sparkles className="w-3 h-3 text-[#2fd9f4]" />
          Challenge PDF Breakdown
        </button>
      </div>

      <div id="footer-disclaimer" className="text-[#bbc9cd]/60 text-[11px] max-w-xl">
        © 2026 CardioViz XR Medical. For Educational &amp; Research Visualization Purposes Only. Not for Primary Clinical Diagnosis.
      </div>

      {/* Structured Medical Information Modal */}
      {activeModal && (
        <div id="footer-info-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#061423] border border-[#2fd9f4]/40 p-6 rounded-xl max-w-lg w-full text-left shadow-2xl shadow-[#2fd9f4]/10 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-[#bbc9cd] hover:text-white hover:bg-[#1e3a4c]/50 rounded-lg transition-colors cursor-pointer"
              title="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#0c2438] border border-[#2fd9f4]/30">
                {activeModal.icon}
              </div>
              <div>
                <span className="text-[10px] font-technical uppercase tracking-widest text-[#2fd9f4] block">
                  {activeModal.category}
                </span>
                <h3 className="font-display font-bold text-white text-base">
                  {activeModal.title}
                </h3>
              </div>
            </div>

            <div className="my-4">
              {activeModal.content}
            </div>

            <div className="flex justify-end pt-3 border-t border-[#1e3a4c]">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-1.5 bg-[#2fd9f4] hover:bg-[#5ce4fa] text-[#050B14] font-technical text-xs uppercase tracking-wider font-bold rounded transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

