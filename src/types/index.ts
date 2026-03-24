export interface Project {
  id: string;
  title: string;
  category: "Web Design" | "Branding" | "Product";
  year: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export type ImageSlot = keyof typeof import('../config/images').images;