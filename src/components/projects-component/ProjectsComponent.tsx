import { Project, Technology } from "@/mock/entities";
import React, { useState } from "react";

import { DropdownTechnologies } from "./DropdownTechnologies";
import { projects } from "@/mock/projects.mock";
import ProjectComponent from "./ProjectComponent";
import { SettingsState, useSettingsStore } from "@/store/settings";
import  { stringsEs }  from "@/content/strings-es";
import  { stringsEn }  from "@/content/strings-en";

const projectHasAnyTechnology = (
  project: Project,
  techs: Technology[]
): boolean => {
  return project.technologies.some((ptech) =>
    techs.some((tech) => ptech.id === tech.id)
  );
};

export default function ProjectsComponent() {
  // const [filters, setFilters] = useState<Technology[]>([]);
  const language = useSettingsStore((s: SettingsState) => s.language);
  const strings = language === 'es' ? stringsEs : stringsEn;

  const [projectsShowed, setProjectsShowed] = useState<Project[]>([
    ...projects,
  ]);

  const handleFilterProjects = (technologiesToShow: Technology[]) => {
    if (!technologiesToShow || technologiesToShow.length <= 0) {
      setProjectsShowed([...projects]);
      return;
    }
    let allProjects = [...projects];

    let filteredProjects: Project[] = [];
    allProjects.forEach((project: Project) => {
      if (projectHasAnyTechnology(project, technologiesToShow)) {
        filteredProjects.push(project);
      }
    });

    setProjectsShowed(filteredProjects);
  };

  return (
    <section
      id="projects"
      className="min-h-[100dvh] w-full pt-[7rem] lg:max-w-7xl flex flex-col"
    >
      <div className="flex w-full flex-wrap justify-between">
        <span className="w-[33%] justify-between">
          <h1 className="text-xl text-title font-bold">{strings.projects.title}</h1>
        </span>
        <div className="min-w-[66%] flex items-center justify-end ml-auto mr-[0px]">
          <DropdownTechnologies onFilterApplied={handleFilterProjects} />
        </div>
      </div>
      <div className="flex flex-wrap my-5 flex-grow">
        {projectsShowed && projectsShowed.length === 0 ? (
          <div className="w-full flex-grow flex justify-center items-center">
            <span>{strings.projects.noElementsText}</span>
          </div>
        ) : (
          projectsShowed.map((project) => (
            <ProjectComponent key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
  );
}
