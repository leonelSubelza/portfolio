import { Technology } from "./entities";

export const getTechnology = (id: string): Technology => {
  const technology: Technology | undefined = technologies.find((tech) => tech.id === id);
  if(!technology) {
    throw new Error(`Technology with id ${id} not found`);
  }
  return technology
}

export const technologies: Technology[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/icons/javascript.svg"
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/icons/typescript.svg"
  },
  {
    id: "react",
    name: "React",
    icon: "/icons/react.svg"
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/icons/nodejs.svg"
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "/icons/nextjs.svg"
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg"
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: "/icons/graphql.svg"
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "/icons/mysql.svg"
  },
  {
    id: "docker",
    name: "Docker",
    icon: "/icons/docker.svg"
  },
  {
    id: "github",
    name: "GitHub",
    icon: "/icons/github.svg"
  },
  {
    id: "java",
    name: "Java",
    icon: "/icons/java.svg"
  },
  {
    id: "spring",
    name: "Spring Framework",
    icon: "/icons/spring.svg"
  },
  {
    id: "jwt",
    name: "Jwt",
    icon: "/icons/jwt.svg"
  },
  {
    id: "angular",
    name: "Angular 18",
    icon: "/icons/angular.svg"
  },
  {
    id: "html",
    name: "HTML 5",
    icon: "/icons/html.svg"
  },
  {
    id: "css",
    name: "CSS 3",
    icon: "/icons/css.svg"
  },
  {
    id: "jasper-reports",
    name: "Jasper Reports",
    icon: "/icons/jasper-reports.svg"
  },
  {
    id: "assembly",
    name: "Assembler",
    icon: "/icons/assembly.svg"
  },
]