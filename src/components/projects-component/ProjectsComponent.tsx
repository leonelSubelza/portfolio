import { Project, Technology } from "@/app/mock/entities";
import React, { useState } from "react";

import { DropdownTechnologies } from "./DropdownTechnologies";
import { projects } from "@/app/mock/projects.mock";
import ProjectComponent from "./ProjectComponent";

export default function ProjectsComponent() {
  const [filters, setFilters] = useState<Technology[]>([]);

  const [projectsShowed, setProjectsShowed] = useState<Project[]>([
    ...projects,
  ]);

const projectHasAnyTechnology = (
  project: Project,
  techs: Technology[]
): boolean => {
  return project.technologies.some((ptech) =>
    techs.some((tech) => ptech.id === tech.id)
  );
};

  const handleFilterProjects = (technologiesToShow: Technology[]) => {
    if (!technologiesToShow || technologiesToShow.length <= 0) {
      console.log("filtro vacio, se muestra todo");
      setProjectsShowed([...projects]);
      return;
    }
    let allProjects = [...projects];
    console.log("All projects: "+allProjects.length);
    
    let filteredProjects: Project[] = [];
    allProjects.forEach((project: Project) => {
      if (projectHasAnyTechnology(project, technologiesToShow)) {
        console.log("se agrega para mostrar a projecto: "+project.title);
        
        filteredProjects.push(project);
      }
    });
    console.log("projects filtrados:");
    console.log(filteredProjects);
    console.log("technologias a mostrar");
    console.log(technologiesToShow);

    setProjectsShowed(filteredProjects);
  };

  return (
    <section id="projects" className="w-7xl max-w-7xl min-h-[100dvh] flex flex-col">
      <div className="flex w-full pt-[7rem]">
        <span className="w-[33%] justify-between">
          <h1 className="text-xl text-title font-bold">Proyectos</h1>
        </span>
        <div className="w-[100%] flex items-center justify-end ">
          <DropdownTechnologies onFilterApplied={handleFilterProjects} />
        </div>
        {/* <span className="hidden lg:w-[33%]"></span> */}
      </div>
      <div className="flex flex-wrap my-5">
        {projectsShowed.map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
