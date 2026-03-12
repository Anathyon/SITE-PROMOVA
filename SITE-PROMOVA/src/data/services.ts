import type { Service } from '../types';
import { Video, Camera, MonitorPlay, Share2, Zap, Layers } from 'lucide-react';

export const services: Service[] = [
  {
    title: 'Produção de Vídeo',
    description: 'Comerciais, vídeos institucionais e documentários com qualidade cinematográfica 4K.',
    icon: Video,
    colors: { from: '#ff0000', to: '#ff7f00' }, // red to orange
  },
  {
    title: 'Fotografia Profissional',
    description: 'Ensaios corporativos, cobertura de eventos e fotografia de produtos de alto nível.',
    icon: Camera,
    colors: { from: '#ff7f00', to: '#ffff00' }, // orange to yellow
  },
  {
   title: 'Transmissão ao Vivo',
    description: 'Lives profissionais para eventos, webinars e lançamentos com multi-câmeras.',
    icon: Zap,
    colors: { from: '#0000ff', to: '#ff0000' }, // blue to red
  },
  {
    title: 'Edição & Motion',
    description: 'Pós-produção avançada, color grading e animações que dão vida ao seu projeto.',
    icon: MonitorPlay,
    colors: { from: '#ffff00', to: '#00ff00' }, // yellow to green
  },
  {
    title: 'Social Media Content',
    description: 'Criação de Reels, TikToks e conteúdos dinâmicos otimizados para engajamento.',
    icon: Share2,
    colors: { from: '#00ff00', to: '#0000ff' }, // green to blue
  },
  {
    title: 'Estratégia Visual',
    description: 'Consultoria completa para posicionamento de marca através do audiovisual.',
    icon: Layers,
    colors: { from: '#ff0000', to: '#0000ff' }, // red to blue
  },
];
