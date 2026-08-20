import { ProgressionStage, ScienceCardData, CascadeStep } from '../types';

export const PROGRESSION_STAGES: ProgressionStage[] = [
  {
    id: 1,
    stageNumber: '01',
    name: 'Endothelial Injury — Damage Begins',
    shortName: 'Endothelial Injury',
    subLocation: 'INNER ARTERY LINING',
    description: 'The smooth protective inner lining of the artery gets irritated and damaged by high blood pressure, stress, or toxins, creating tiny microscopic openings.',
    detailedScience: 'The healthy endothelium acts like non-stick Teflon. When damaged, it loses its protective barrier, making it easy for cholesterol particles in the bloodstream to enter the arterial wall.',
    statusColor: 'cyan',
    accentHex: '#2fd9f4',
    iconName: 'Droplets',
    lumenOcclusion: 0,
    bloodVelocity: 42.5,
    shearStress: 1.8,
    riskLevel: 'STAGE 1: DAMAGE',
    imageQuadrant: 'top-left'
  },
  {
    id: 2,
    stageNumber: '02',
    name: 'ApoB Retention — Cholesterol Gets Trapped',
    shortName: 'ApoB Retention',
    subLocation: 'INSIDE ARTERY WALL',
    description: 'Atherogenic cholesterol particles (ApoB) slip inside the damaged artery wall and become trapped, causing inflammation and early fatty streaks.',
    detailedScience: 'ApoB particles become sticky inside the wall. Immune cells arrive to clean them up, but become engorged with fat (foam cells), establishing the hidden foundation of plaque.',
    statusColor: 'orange',
    accentHex: '#ffae83',
    iconName: 'ScatterChart',
    lumenOcclusion: 25,
    bloodVelocity: 36.2,
    shearStress: 2.6,
    riskLevel: 'STAGE 2: TRAPPED LIPIDS',
    imageQuadrant: 'top-right'
  },
  {
    id: 3,
    stageNumber: '03',
    name: 'Plaque Growth — Artery Narrows',
    shortName: 'Plaque Growth',
    subLocation: 'GROWING PLAQUE CAP',
    description: 'A fatty core grows under a protective fibrous cap. As the plaque expands, it squeezes the artery, restricting healthy blood flow.',
    detailedScience: 'The body builds a fibrous cap over the fatty buildup. For years you may feel nothing because the artery stretches, but eventually the passage becomes dangerously tight.',
    statusColor: 'orange',
    accentHex: '#ffae83',
    iconName: 'Activity',
    lumenOcclusion: 65,
    bloodVelocity: 68.4,
    shearStress: 5.4,
    riskLevel: 'STAGE 3: NARROWING',
    imageQuadrant: 'bottom-left'
  },
  {
    id: 4,
    stageNumber: '04',
    name: 'Plaque Rupture — Clot Rapidly Forms',
    shortName: 'Rupture & Clot',
    subLocation: 'ACUTE CLOT FORMATION',
    description: 'The thin plaque cap tears open. Blood reacts instantly to the exposed fatty core, rapidly forming a clot that blocks the artery.',
    detailedScience: 'High pressure causes the fragile cap to tear. Blood platelets rush in within seconds to seal the tear, building a sudden obstructing blood clot that triggers a heart attack.',
    statusColor: 'crimson',
    accentHex: '#ffb4ab',
    iconName: 'AlertTriangle',
    lumenOcclusion: 95,
    bloodVelocity: 8.1,
    shearStress: 14.2,
    riskLevel: 'STAGE 4: SUDDEN CLOT',
    imageQuadrant: 'bottom-right'
  }
];

export const SCIENCE_CARDS: ScienceCardData[] = [
  {
    id: 'endothelium',
    title: 'The Artery Lining',
    subtitle: 'Your Vascular Protective Shield',
    icon: 'Microscope',
    accentColor: '#2fd9f4',
    description: 'The single smooth layer of cells lining your blood vessels. When healthy, it keeps blood flowing smoothly without sticking. When irritated by smoking, high pressure, or high sugar, it opens microscopic gateways for cholesterol to invade.',
    keyMolecules: ['Nitric Oxide (Smooth Flow)', 'Protective Barrier', 'Elastic Tone'],
    clinicalSignificance: 'Damage to this lining is the silent first step of heart disease before any symptoms appear.'
  },
  {
    id: 'apob',
    title: 'ApoB Particles',
    subtitle: 'The Real Cargo of Bad Cholesterol',
    icon: 'FlaskConical',
    accentColor: '#ffd4bf',
    description: 'ApoB is the driving carrier protein found on all dangerous cholesterol particles (like LDL). Standard cholesterol tests measure weight, but ApoB measures the exact number of particles that can invade and get trapped inside your artery wall.',
    keyMolecules: ['ApoB-100', 'Trapped LDL', 'Early Fatty Streak'],
    clinicalSignificance: 'Every particle trapped inside the wall causes inflammation and begins plaque growth.'
  },
  {
    id: 'plaque',
    title: 'Plaque Buildup',
    subtitle: 'The Hidden Fat & Fibrous Core',
    icon: 'AlertTriangle',
    accentColor: '#ffae83',
    description: 'A growing buildup made of trapped fat, cholesterol, and immune cells covered by a fibrous cap. Because arteries expand outward during early growth, people often have zero symptoms even while plaque is steadily developing.',
    keyMolecules: ['Fibrous Cap', 'Fatty Core', 'Calcium Deposits'],
    clinicalSignificance: 'A thin, weak cap is more dangerous than a large hard plaque because it can tear suddenly.'
  },
  {
    id: 'thrombus',
    title: 'Blood Clot (Thrombus)',
    subtitle: 'The Sudden Event',
    icon: 'HeartPulse',
    accentColor: '#ffb3ad',
    description: 'When an unstable plaque cap cracks open, the blood touches the raw lipid core. In seconds, blood platelets and sticky fibrin fibers stick together into a fast-growing clot that stops blood from reaching the heart muscle.',
    keyMolecules: ['Platelet Plug', 'Fibrin Mesh', 'Artery Blockage'],
    clinicalSignificance: 'Most heart attacks happen when a clot forms suddenly, not from gradual slow narrowing.'
  }
];

export const CASCADE_STEPS: CascadeStep[] = [
  {
    id: 1,
    label: ['HEALTHY', 'FLOW'],
    icon: 'Droplet',
    accentColor: '#2fd9f4',
    detail: 'Blood cells travel smoothly through an unobstructed, elastic artery with an intact protective lining.'
  },
  {
    id: 2,
    label: ['INNER', 'DAMAGE'],
    icon: 'ShieldAlert',
    accentColor: '#2fd9f4',
    detail: 'High blood pressure or toxins cause tiny microscopic cracks in the delicate protective lining.'
  },
  {
    id: 3,
    label: ['APOB', 'TRAPPED'],
    icon: 'Sparkles',
    accentColor: '#ffd4bf',
    detail: 'ApoB cholesterol particles enter through the cracks and become permanently trapped inside the artery wall.'
  },
  {
    id: 4,
    label: ['PLAQUE', 'BUILDS UP'],
    icon: 'Layers',
    accentColor: '#ffae83',
    detail: 'Trapped fat and immune cells form a growing plaque deposit covered by a protective cap.'
  },
  {
    id: 5,
    label: ['CAP', 'TEARS OPEN'],
    icon: 'Zap',
    accentColor: '#ffb4ab',
    borderClass: 'border-red-400/50 shadow-[0_0_15px_rgba(255,180,171,0.2)]',
    glowClass: 'text-red-300',
    detail: 'The thin fibrous cap cracks under pressure, exposing the toxic fatty core directly to flowing blood.'
  },
  {
    id: 6,
    label: ['CLOT', 'BLOCKS FLOW'],
    icon: 'Crosshair',
    accentColor: '#ffb3ad',
    borderClass: 'border-red-500/50 shadow-[0_0_20px_rgba(255,179,173,0.3)]',
    glowClass: 'text-red-400',
    detail: 'Blood platelets rapidly form an emergency clot over the tear, abruptly blocking blood flow.'
  }
];
