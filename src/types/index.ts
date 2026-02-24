export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'reforma' | 'limpieza';
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'reforma' | 'limpieza';
  images: string[];
  completedAt: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  image: string;
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
