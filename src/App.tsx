/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavigationTab } from './types';
import { ShaderBackground } from './components/ShaderBackground';
import { Navbar } from './components/Navbar';
import { HeroView } from './components/HeroView';
import { PathologiesView } from './components/PathologiesView';
import { ProceduresView } from './components/ProceduresView';
import { EducationView } from './components/EducationView';
import { LiveXRModal } from './components/LiveXRModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('models');
  const [selectedStageId, setSelectedStageId] = useState<number>(2);
  const [isGoLiveOpen, setIsGoLiveOpen] = useState<boolean>(false);

  const handleStageSelectAndNavigate = (stageId: number) => {
    setSelectedStageId(stageId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050B14] text-[#d6e4f9] relative selection:bg-[#2fd9f4] selection:text-[#050B14] overflow-x-hidden">
      {/* Dynamic Arterial Glow & WebGL Particle Shader Background */}
      <ShaderBackground opacity={currentTab === 'procedures' ? 0.25 : 0.45} />

      {/* Persistent Top Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenGoLive={() => setIsGoLiveOpen(true)}
      />

      {/* Main View Router Content */}
      <div className="flex-1 flex flex-col">
        {currentTab === 'models' && (
          <HeroView
            onNavigate={setCurrentTab}
            onSelectStage={(id) => {
              setSelectedStageId(id);
              setCurrentTab('procedures');
            }}
          />
        )}

        {currentTab === 'pathologies' && (
          <PathologiesView
            onNavigate={setCurrentTab}
            onSelectStage={(id) => {
              setSelectedStageId(id);
              setCurrentTab('procedures');
            }}
          />
        )}

        {currentTab === 'procedures' && (
          <ProceduresView
            selectedStageId={selectedStageId}
            onSelectStage={setSelectedStageId}
          />
        )}

        {currentTab === 'education' && <EducationView />}
      </div>

      {/* Footer */}
      <Footer />

      {/* Interactive XR Live Stream Simulation Modal */}
      <LiveXRModal
        isOpen={isGoLiveOpen}
        onClose={() => setIsGoLiveOpen(false)}
      />
    </div>
  );
}
