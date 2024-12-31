import { Box, Video, Layers, Smartphone, Palette, Code } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: Box, // Changed from Cube to Box
    title: '3D Modeling & Animation',
    description: 'Creating stunning 3D models and animations for products, architecture, and entertainment.'
  },
  {
    icon: Video,
    title: 'Motion Graphics',
    description: 'Engaging motion graphics and visual effects for brand stories and digital content.'
  },
  {
    icon: Layers,
    title: 'Product Design',
    description: 'End-to-end product design services from concept to prototype.'
  },
  {
    icon: Smartphone,
    title: 'Interactive Experiences',
    description: 'Immersive AR/VR experiences and interactive installations.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions for web and mobile applications.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Full-stack development services to bring your digital products to life.'
  }
];