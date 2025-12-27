
export interface Resource {
  id: string;
  title: string;
  description: string;
  phone?: string;
  link: string;
  category: 'Emergência' | 'Apoio Jurídico' | 'Saúde Mental' | 'Abrigo';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HOME = 'home',
  IDENTIFY = 'identify',
  GET_HELP = 'get-help',
  RIGHTS = 'rights',
  FAQ = 'faq',
}
