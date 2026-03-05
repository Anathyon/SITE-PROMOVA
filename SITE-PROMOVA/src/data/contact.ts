import type { ContactInfo } from '../types';
import { Mail, Phone, MapPin } from 'lucide-react';

export const contactInfo: ContactInfo[] = [
  {
    label: 'E-mail',
    value: 'contato@promovaproducoes.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: '(88) 99436-8177',
    icon: Phone,
  },
  {
    label: 'Localização',
    value: 'RUA MONSENHOR FURTADO 130, CENTRO, MERUOCA, CEARÁ',
    icon: MapPin,
  },
];

export const contactServices = [
  'Produção de Vídeo',
  'Fotografia',
  'Social Media',
  'Outros'
];
