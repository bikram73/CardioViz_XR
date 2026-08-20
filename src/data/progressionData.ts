import { ProgressionStage, ScienceCardData, CascadeStep } from '../types';

export const PROGRESSION_STAGES: ProgressionStage[] = [
  {
    id: 1,
    stageNumber: '01',
    name: 'Healthy Artery & Endothelial Injury',
    shortName: 'Endothelial Injury',
    subLocation: 'ENDOTHELIAL SURFACE',
    description: 'Initial irritation or damage to the inner lining of the artery wall, compromising the protective barrier and allowing lipid infiltration.',
    detailedScience: 'The single layer of squamous endothelial cells maintains vascular homeostasis through nitric oxide (NO) regulation. Hemodynamic shear stress disturbances and biochemical insults create microscopic breaches in this delicate selective barrier.',
    statusColor: 'cyan',
    accentHex: '#2fd9f4',
    iconName: 'Droplets',
    lumenOcclusion: 0,
    bloodVelocity: 42.5,
    shearStress: 1.8,
    riskLevel: 'OPTIMAL',
    imageQuadrant: 'top-left'
  },
  {
    id: 2,
    stageNumber: '02',
    name: 'ApoB Retention & Atherosclerosis Initiation',
    shortName: 'ApoB Retention',
    subLocation: 'SUB-INTIMAL SPACE',
    description: 'Apolipoprotein B-containing lipoproteins accumulate in the sub-intimal space, triggering an inflammatory cascade and macrophage recruitment.',
    detailedScience: 'Atherogenic particles (LDL, VLDL, Lp(a)) infiltrate the compromised endothelium, binding proteoglycans where they undergo oxidative modification. Recruited monocytes differentiate into macrophages, engulfing lipids to form foam cells.',
    statusColor: 'orange',
    accentHex: '#ffae83',
    iconName: 'ScatterChart',
    lumenOcclusion: 25,
    bloodVelocity: 36.2,
    shearStress: 2.6,
    riskLevel: 'MODERATE',
    imageQuadrant: 'top-right'
  },
  {
    id: 3,
    stageNumber: '03',
    name: 'Plaque Growth & Luminal Stenosis',
    shortName: 'Plaque Growth',
    subLocation: 'LIPID CORE / FIBROUS CAP',
    description: 'Formation of a necrotic lipid core covered by a fibrous cap. The growing atheroma narrows the arterial lumen, restricting critical hemodynamics.',
    detailedScience: 'Vascular smooth muscle cells migrate to form a collagenous fibrous cap over a lipid-rich necrotic core. As the plaque expands inward, lumen area is severely reduced, generating turbulent shear and post-stenotic pressure drops.',
    statusColor: 'orange',
    accentHex: '#ffae83',
    iconName: 'Activity',
    lumenOcclusion: 65,
    bloodVelocity: 68.4,
    shearStress: 5.4,
    riskLevel: 'ELEVATED',
    imageQuadrant: 'bottom-left'
  },
  {
    id: 4,
    stageNumber: '04',
    name: 'Plaque Rupture & Occlusive Thrombus',
    shortName: 'Rupture & Clot',
    subLocation: 'THROMBOSIS',
    description: 'Fibrous cap rupture exposes prothrombotic material to flowing blood, inducing rapid platelet aggregation and occlusive thrombus formation.',
    detailedScience: 'Matrix metalloproteinases thin the fibrous cap until mechanical shear triggers fissure. Exposure of subendothelial tissue factor initiates the coagulation cascade, assembling a dense fibrin-erythrocyte mesh that abruptly occludes the artery.',
    statusColor: 'crimson',
    accentHex: '#ffb4ab',
    iconName: 'AlertTriangle',
    lumenOcclusion: 95,
    bloodVelocity: 8.1,
    shearStress: 14.2,
    riskLevel: 'CRITICAL',
    imageQuadrant: 'bottom-right'
  }
];

export const SCIENCE_CARDS: ScienceCardData[] = [
  {
    id: 'endothelium',
    title: 'Endothelium',
    subtitle: 'Vascular Barrier & Tone Regulator',
    icon: 'Microscope',
    accentColor: '#2fd9f4',
    description: 'The single layer of squamous endothelial cells that line the interior surface of blood vessels. It acts as a selective barrier, regulating molecular transport and maintaining vascular homeostasis. Dysfunction is the primary instigator of atherosclerosis.',
    keyMolecules: ['Nitric Oxide (NO)', 'Prostacyclin', 'Endothelin-1', 'VCAM-1'],
    clinicalSignificance: 'Loss of endothelial integrity is the initial silent step in vascular disease progression.'
  },
  {
    id: 'apob',
    title: 'ApoB',
    subtitle: 'Atherogenic Lipoprotein Vector',
    icon: 'FlaskConical',
    accentColor: '#ffd4bf',
    description: 'Apolipoprotein B is the primary structural protein of atherogenic lipoproteins (LDL, VLDL). When these particles breach a compromised endothelium, ApoB binds to subendothelial proteoglycans, leading to retention, oxidation, and subsequent immune response.',
    keyMolecules: ['ApoB-100', 'Oxidized LDL', 'Proteoglycans', 'Scavenger Receptors'],
    clinicalSignificance: 'Particle count (ApoB) is a superior causal biomarker compared to standard cholesterol concentration.'
  },
  {
    id: 'plaque',
    title: 'Plaque',
    subtitle: 'Intimal Atheroma & Stenosis',
    icon: 'AlertTriangle',
    accentColor: '#ffb4ab',
    description: 'A complex atheroma formed in the intimal layer, consisting of a necrotic core (lipid, dead macrophages/foam cells) and a fibrous cap. Progressive expansion encroaches on the arterial lumen, restricting critical hemodynamics.',
    keyMolecules: ['Collagen Type I/III', 'Foam Cells', 'Calcium Hydroxyapatite', 'MMP-9'],
    clinicalSignificance: 'Vulnerability to rupture is determined by cap thickness and necrotic core volume rather than stenosis alone.'
  },
  {
    id: 'thrombus',
    title: 'Thrombus',
    subtitle: 'Acute Occlusive Coagulum',
    icon: 'HeartPulse',
    accentColor: '#ffb3ad',
    description: 'A blood clot formed in situ within the vascular system. Often triggered by the rupture of an unstable atherosclerotic plaque, exposing thrombogenic material (tissue factor) to the bloodstream, leading to rapid occlusion (e.g., Myocardial Infarction).',
    keyMolecules: ['Tissue Factor', 'Thrombin', 'Fibrin Polymer', 'Activated Platelets'],
    clinicalSignificance: 'Sudden thrombotic occlusion of a coronary artery triggers acute myocardial infarction.'
  }
];

export const CASCADE_STEPS: CascadeStep[] = [
  {
    id: 1,
    label: ['BLOOD', 'FLOW'],
    icon: 'Droplet',
    accentColor: '#2fd9f4',
    detail: 'Laminar hemodynamic blood flow delivering oxygenated erythrocytes through healthy elastic artery.'
  },
  {
    id: 2,
    label: ['ENDOTHELIAL', 'DAMAGE'],
    icon: 'ShieldAlert',
    accentColor: '#2fd9f4',
    detail: 'Biochemical stress, hypertension, or turbulent shear disrupts endothelial tight junctions.'
  },
  {
    id: 3,
    label: ['APOB', 'RETENTION'],
    icon: 'Sparkles',
    accentColor: '#ffd4bf',
    detail: 'Circulating ApoB particles enter the intima, become trapped by proteoglycans, and undergo oxidation.'
  },
  {
    id: 4,
    label: ['PLAQUE', 'DEVELOPMENT'],
    icon: 'Layers',
    accentColor: '#ffae83',
    detail: 'Macrophage foam cells aggregate into a necrotic lipid core enclosed by a smooth muscle fibrous cap.'
  },
  {
    id: 5,
    label: ['RUPTURE', ''],
    icon: 'Zap',
    accentColor: '#ffb4ab',
    borderClass: 'border-red-400/50 shadow-[0_0_15px_rgba(255,180,171,0.2)]',
    glowClass: 'text-red-300',
    detail: 'Enzymatic matrix degradation leads to fibrous cap thinning and structural failure under pulsatile stress.'
  },
  {
    id: 6,
    label: ['THROMBUS', ''],
    icon: 'Crosshair',
    accentColor: '#ffb3ad',
    borderClass: 'border-red-500/50 shadow-[0_0_20px_rgba(255,179,173,0.3)]',
    glowClass: 'text-red-400',
    detail: 'Tissue factor activation initiates acute thrombosis, forming a fibrin clot that occludes the lumen.'
  }
];
