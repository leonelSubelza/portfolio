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
  image: string;
  url: string;
  technologies: Technology[];
}
