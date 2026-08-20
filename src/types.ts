export type NavigationTab = 'models' | 'pathologies' | 'procedures' | 'education';

export interface ProgressionStage {
  id: number;
  stageNumber: string;
  name: string;
  shortName: string;
  subLocation: string;
  description: string;
  detailedScience: string;
  statusColor: string; // 'cyan' | 'orange' | 'red' | 'crimson'
  accentHex: string;
  iconName: string;
  lumenOcclusion: number; // percentage e.g. 0%, 25%, 65%, 95%
  bloodVelocity: number; // cm/s
  shearStress: number; // Pa
  riskLevel: 'OPTIMAL' | 'MODERATE' | 'ELEVATED' | 'CRITICAL';
  imageQuadrant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface VisualLayerVisibility {
  bloodFlow: boolean;
  endothelium: boolean;
  apobParticles: boolean;
  plaque: boolean;
  platelets: boolean;
  thrombus: boolean;
}

export interface ScienceCardData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accentColor: string;
  description: string;
  keyMolecules: string[];
  clinicalSignificance: string;
}

export interface CascadeStep {
  id: number;
  label: string[];
  icon: string;
  accentColor: string;
  borderClass?: string;
  glowClass?: string;
  detail: string;
}
