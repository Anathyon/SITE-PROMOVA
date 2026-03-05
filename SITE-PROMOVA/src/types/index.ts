import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { LucideProps } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
  location: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  colors: {
    from: string;
    to: string;
  };
}

export interface Stat {
  label: string;
  value: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}
