

export interface Threat {
  severity: number;
  category: string;
  id: string;
  name: string;
  shortDescription: string;
  details: string[];
  impacts: string[];
  icon?: string; 
  image: string; 
  preventionId?: string;
}


export interface PreventionTip {
  id: string
  title: string
  shortDescription: string
  steps: string[]
  additionalInfo: string
  applicableThreats: string[]
}

// Tool
export interface ToolOption {
  name: string;
  price: string;
  link: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  features: string[];
  options: ToolOption[];
  icon?: string;
  image?: string; 
  version?: string; 
  size?: string; 
  category?: string; 
  date?: string; 
  updates?: string; 
}

export interface GlossaryTerm {
  category: string;
  id: string;
  term: string;
  definition: string;
  extendedDescription?: string;
  relatedTerms?: string[];
}

export interface User {
  id: string
  name: string
  email: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: string
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  summary: string;
  imageUrl: string;
  date: string;
  url: string;
  description: string;
  source?: string;
  category?: string;
  threat_level?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  tags?: string[];
}
export interface Module {
  id: string;
  title: string;
  content: string;
  quiz?: {
    questions: {
      id: string;
      question: string;
      options: string[];
      correctAnswer: number;
    }[];
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  tags: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites?: string[];
  image: string;
  externalLink: string;
  available: boolean; 
}
export interface AssessmentQuestion {
  id: string;
  question: string;
  options: string[];
  difficulty?: 'easy' | 'medium' | 'hard'; 
}

export interface AssessmentResult {
  score: number;
  summary: string;
  recommendations: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'Articles' | 'Videos' | 'Tools' | 'Courses';
  url: string;
  icon?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  tags?: string[];
  trending?: boolean;
  new?: boolean;
}

export interface IncidentReport {
  type: string;
  date: string;
  time: string;
  description: string;
  impact: string;
  actions: string;
  severity: IncidentSeverity;
  affectedSystems: string;
  witnesses: string;
  evidenceAttached: boolean;
  personName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  evidenceFile: File | null;
}

export type IncidentSeverity = 'critical' | 'high' | 'medium' | 'low';

