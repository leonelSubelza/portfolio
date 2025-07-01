import { Project, Technology } from "@/mock/entities";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ExternalLink } from "lucide-react";

interface Props {
  project: Project;
}

export default function ProjectComponent({ project }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // o un loading spinner

  return (
    <div
      className="
    w-[100%] h-auto md:w-[50%] md:h-[500px] lg:w-[33%] lg:h-[500px]
    flex flex-col overflow-y-auto overflow-x-hidden border border-black-200 bg-background-header my-2 lg:m-0"
    >
      {/* h-[217px] md:h-[50%] lg:h-[50%]*/}
      <div className="m-auto flex w-full md:h-[50%] lg:h-[50%] relative  hover:bg-[#222222d0]">
        <img
          className={`m-auto w-full h-full object-contain lg:object-fill
            ${
              theme === "light" && "filter grayscale contrast-90 brightness-120"
            }
            `}
          src={
            project.image === ""
              ? "https://andreag-portfolio.netlify.app/img/portfolio.webp"
              : project.image
          }
          alt={project.title}
        />
        {project.url && (
          <span
            className={`absolute flex w-full h-full top-0 items-center justify-center
            text-stone-50 transition duration-300 ease-in-out opacity-0 
            hover:opacity-100 md:hover:bg-[#222222d0]`}
          >
            <Link className="flex" target="_blank" href={project.url}>
              Live demo <ExternalLink className="ml-1" />
            </Link>
          </span>
        )}
      </div>
      <div className="md:h-[30%] lg:h-[30%] flex flex-col p-3">
        <h1 className="text-xl">{project.title}</h1>
        <div className="overflow-y-auto overflow-x-hidden text-start m-auto w-full">
          <p className="text-xs">{project.description}</p>
        </div>
      </div>
      <div className="lg:h-[20%] flex flex-wrap px-3 pb-2 lg:pb-0 justify-between">
        <div className="w-[50%] flex flex-wrap justify-start items-center overflow-y-auto">
          {project.technologies.map(
            (tech: Technology) =>
              tech.icon !== "" && (
                <Tooltip key={tech.id}>
                  <TooltipTrigger asChild>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={30}
                      height={30}
                      className={`inline-block m-1 rounded-[20%] ${
                        theme === "light" && tech.name === "React"
                          ? "filter grayscale contrast-0 brightness-0"
                          : theme === "light" &&
                            tech.name !== "React" &&
                            "filter grayscale contrast-90 brightness-120"
                      }`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              )
          )}
        </div>
        <div className="flex flex-col justify-center items-end">
          {project.url && (
            <Link
              className={`flex lg:hidden`}
              target="_blank"
              href={project.url}
            >
              <Button variant="link" size="sm" className="cursor-pointer p-0">
                {/* Live demo <ExternalLink width={100} height={100} className="ml-1" /> */}
                <span className="text-xs">Live demo</span>
                <Image
                  src="/icons/external-link.svg"
                  alt="github"
                  width={25}
                  height={25}
                  className={`inline-block mr-2 ${
                    theme === "dark" && "filter invert-[1]"
                  }`}
                />
              </Button>
            </Link>
          )}

          <Link
            className="w-full"
            target="_blank"
            href={project.githubUrl}
          >
            <Button variant="link" size="sm" className="cursor-pointer p-0">
              <span className="text-xs">Source Code</span>
              <Image
                src="/icons/github.svg"
                alt="github"
                width={25}
                height={25}
                className={`inline-block mr-2 ${
                  theme === "dark" && "filter invert-[1]"
                }`}
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
