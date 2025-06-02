import { Project, Technology } from "@/app/mock/entities";
import React from "react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  project: Project;
}

export default function ProjectComponent({ project }: Props) {
  return (
    <div className="flex flex-col w-[33%] h-[500px] overflow-y-auto overflow-x-hidden border border-black-200">
      <div className="flex h-[50%] cursor-pointer">
      <Link className="h-full w-full" target="_blank" href={project.url}>
        <img
          className="h-full w-full"
          src={project.image === ''
            ? "https://andreag-portfolio.netlify.app/img/portfolio.webp"
            : project.image
          }
        />
      </Link>
      </div>
      <div className="h-[30%] flex flex-col p-3 ">
        <h1 className="text-xl">{project.title}</h1>
        <div className="overflow-y-auto overflow-x-hidden text-start m-auto">
          <p className="text-xs">{project.description}</p>
        </div>
      </div>
      <div className="h-[10%] flex flex-wrap px-3 justify-between">
        <div className="min-w-[50%] flex flex-wrap justify-start items-center">
          {project.technologies.map(
            (tech: Technology) =>
              tech.icon !== "" && (
                <Tooltip key={tech.id}>
                  <TooltipTrigger asChild>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={25}
                      height={25}
                      className="inline-block mr-2"
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              )
          )}
        </div>
        <div className="w-[50%] flex justify-end items-center">
          <Link target="_blank" href={project.url}>
          <Button variant="link" size="sm">
            <span className="text-xs">Source Code</span>
            <Image
              src="/icons/github.svg"
              alt="github"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
