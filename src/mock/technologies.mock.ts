import { Technology } from "./entities";
import { v4 as uuidv4 } from "uuid";

export const getTechnology = (id: string): Technology => {
  const technology: Technology | undefined = technologies.find(
    (tech) => tech.key === id
  );
  if (!technology) {
    throw new Error(`Technology with key ${id} not found`);
  }
  return technology;
};

export const technologies: Technology[] = [
  {
    id: uuidv4(),
    key: "javascript",
    name: "JavaScript",
    icon: "/icons/javascript.svg",
  },
  {
    id: uuidv4(),
    key: "typescript",
    name: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    id: uuidv4(),
    key: "react",
    name: "React",
    icon: "/icons/react.svg",
  },
  // {
  //   id: uuidv4(),
  //   key: "nodejs",
  //   name: "Node.js",
  //   icon: "/icons/nodejs.svg",
  // },
  {
    id: uuidv4(),
    key: "nextjs",
    name: "Next.js",
    icon: "/icons/nextjs.svg",
  },
  {
    id: uuidv4(),
    key: "tailwind",
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
  },
  // {
  //   id: uuidv4(),
  //   key: "graphql",
  //   name: "GraphQL",
  //   icon: "/icons/graphql.svg",
  // },
  {
    id: uuidv4(),
    key: "mysql",
    name: "MySQL",
    icon: "/icons/mysql.svg",
  },
  // {
  //   id: uuidv4(),
  //   key: "docker",
  //   name: "Docker",
  //   icon: "/icons/docker.svg",
  // },
  // {
  //   id: uuidv4(),
  //   key: "github",
  //   name: "GitHub",
  //   icon: "/icons/github.svg"
  // },
  {
    id: uuidv4(),
    key: "java",
    name: "Java",
    icon: "/icons/java.svg",
  },
  {
    id: uuidv4(),
    key: "spring",
    name: "Spring Framework",
    icon: "/icons/spring.svg",
  },
  {
    id: uuidv4(),
    key: "jwt",
    name: "Jwt",
    icon: "/icons/jwt.svg",
  },
  {
    id: uuidv4(),
    key: "angular",
    name: "Angular 18",
    icon: "/icons/angular.svg",
  },
  {
    id: uuidv4(),
    key: "html",
    name: "HTML 5",
    icon: "/icons/html.svg",
  },
  {
    id: uuidv4(),
    key: "css",
    name: "CSS 3",
    icon: "/icons/css.svg",
  },
  {
    id: uuidv4(),
    key: "jasper-reports",
    name: "Jasper Reports",
    icon: "/icons/jasper-reports.svg",
  },
  {
    id: uuidv4(),
    key: "assembly",
    name: "Assembler",
    icon: "/icons/assembly.svg",
  },
  // {
  //   id: uuidv4(),
  //   key: "swagger",
  //   name: "Swagger",
  //   icon: "/icons/swagger.svg",
  // },
];
