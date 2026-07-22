export type ActiveTab = 'home' | 'about' | 'services' | 'contact';

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface TrustFactor {
  title: string;
  description: string;
  iconName: string;
}

export interface SolarService {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  suitableFor: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  review: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
export interface CERTS  {
  id: string;
  image: string;}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  image: string;
  features: string[];
  suitableFor: string[];
}
