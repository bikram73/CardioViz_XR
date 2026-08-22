import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  return (
    <footer className="relative w-full flex flex-col items-center gap-4 text-center bg-[#020f1e] py-8 px-4 sm:px-12 border-t border-[#1E3A4C] text-xs font-body text-[#bbc9cd] z-10 mt-auto">
      <div className="font-display font-bold text-lg sm:text-xl text-white tracking-wider mb-1 flex items-center gap-2">
        <span className="text-[#2fd9f4]">CARDIOVIZ</span> XR
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 font-technical text-[11px] uppercase tracking-widest text-[#bbc9cd]">
        <button
          onClick={() =>
            setModalContent(
              'Privacy Policy: CardioViz XR complies with HIPAA & GDPR guidelines. Simulation telemetry and visual interactions are processed strictly for medical training and educational research.'
            )
          }
          className="hover:text-[#2fd9f4] transition-colors cursor-pointer"
        >
          Privacy Policy
        </button>
        <button
          onClick={() =>
            setModalContent(
              'Terms of Service: This computational arterial visualization software is designed for academic, clinical pathology research, and simulation purposes.'
            )
          }
          className="hover:text-[#2fd9f4] transition-colors cursor-pointer"
        >
          Terms of Service
        </button>
        <button
          onClick={() =>
            setModalContent(
              'Ethical Standards: CardioViz XR adheres to rigorous biomedical simulation integrity and evidence-based cardiovascular research protocols.'
            )
          }
          className="hover:text-[#2fd9f4] transition-colors cursor-pointer"
        >
          Ethical Standards
        </button>
        <button
          onClick={() =>
            setModalContent(
              'Contact Research: Email: research@cardioviz-xr.med | Vascular Pathology Modeling Lab, Boston & London.'
            )
          }
          className="hover:text-[#2fd9f4] transition-colors cursor-pointer"
        >
          Contact Research
        </button>
        <a
          href="/docs/CardioViz_XR_1_Page_Breakdown.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2fd9f4] hover:underline transition-colors"
        >
          Challenge PDF Breakdown
        </a>
      </div>

      <div className="text-[#bbc9cd]/60 text-[11px] max-w-xl">
        © 2026 CardioViz XR Medical. For Educational &amp; Research Visualization Purposes Only. Not for Primary Clinical Diagnosis.
      </div>

      {/* Simple Information Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-[#061423] border border-[#2fd9f4]/50 p-6 rounded-xl max-w-md text-left shadow-2xl">
            <h4 className="font-display font-bold text-white text-base mb-2">
              CardioViz XR Notice
            </h4>
            <p className="text-xs text-[#bbc9cd] leading-relaxed mb-4">
              {modalContent}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="px-4 py-1.5 bg-[#2fd9f4] text-[#050B14] font-technical text-xs uppercase tracking-wider font-bold rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
