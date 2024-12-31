import { LucideIcon } from 'lucide-react';

export interface Project {
  image: string;
  title: string;
  category: string;
  featured?: boolean;
  videoUrl: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}