export interface Technology {
  id: string;
  key: string;
  name: string;
  icon: string;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  descriptionEn?: string;
  image: string;
  url?: string;
  githubUrl: string;
  createdAt: Date;
  finishedAt?: Date;
  highlighted?: boolean;
  duration?: string;
  teamSize?: number;
  technologies: Technology[];
}
