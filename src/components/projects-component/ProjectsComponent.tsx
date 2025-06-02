import { Project, Technology } from '@/app/mock/entities'
import React, { useState } from 'react'
import { DropdownTechnologies } from './DropdownTechnologies';
import { projects } from '@/app/mock/projects.mock';
import ProjectComponent from './ProjectComponent';


export default function ProjectsComponent() {
  const [filters, setFilters] = useState<Technology[]>([]);


  return (
    <div id="projects" className="w-full min-h-[100dvh] flex flex-col">
      <div className='flex flex-row w-full pt-[7rem]'>
        <span className='w-[33%] justify-between'><h1>Proyectos</h1></span>
        <div className='w-[33%] flex justify-center items-center'>
          <DropdownTechnologies />
        </div>
        <span className='w-[33%]'></span>
      </div>
      <div className='flex flex-row flex-wrap my-5'>
        {
          projects.map((project) => (
            <ProjectComponent key={project.id} project={project} />
          ))
        }
      </div>
    </div>
  )
}
