"use client";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Technology } from "@/app/mock/entities";
import { technologies } from "@/app/mock/entities.mock";
import { ChevronDown, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useTheme } from "next-themes";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface TechnologyDropdown {
  id: string;
  technology: Technology;
  checked: Checked;
}

const getTechnologyDropdownItems = (): TechnologyDropdown[] => {
  let technologiesAux: Technology[] = technologies;
  return technologiesAux.map((tech) => ({
    id: uuidv4(),
    technology: tech,
    checked: false, // Default unchecked
  }));
};

interface Props {
  onFilterApplied: (technologiesToShow: Technology[]) => void;
}

export function DropdownTechnologies({ onFilterApplied }: Props) {
  // const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  // const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  // const [showPanel, setShowPanel] = useState<Checked>(false);

  const { theme } = useTheme();
  const [technologiesDropdown, setTechnologiesDropdown] = useState<
    TechnologyDropdown[]
  >(getTechnologyDropdownItems());
  const [technologiesSelected, setTechnologiesSelected] = useState<
    TechnologyDropdown[]
  >([]);

  const [mounted, setMounted] = useState(false);

  // const deleteTechnology = (technology: TechnologyDropdown) => {
  //   setTechnologiesSelected(
  //       technologiesSelected.filter((item) => item.id !== technology.id)
  //     );
  // }

  const getTechnologiesSelected = (
    techSelected: TechnologyDropdown[]
  ): Technology[] => {
    return techSelected.map((t: TechnologyDropdown) => t.technology);
  };

  const handleItemTechnologyChange = (technology: TechnologyDropdown) => {
    // if(!technologiesSelected || technologiesSelected.length<1) {
    //   return;
    // }
    technology.checked = !technology.checked;
    let techToShow = [];

    if (technology.checked) {
      techToShow = [...technologiesSelected, technology];
      setTechnologiesSelected(techToShow);
    } else {
      techToShow = technologiesSelected.filter(
        (item) => item.id !== technology.id
      );
      setTechnologiesSelected(techToShow);
    }
    setTechnologiesDropdown([...technologiesDropdown]);
    return onFilterApplied(getTechnologiesSelected(techToShow));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // o un loading spinner

  return (
    <>
      <div className="flex flex-wrap">
        {technologiesSelected.map((tech: TechnologyDropdown) => (
          <Badge
            variant="outline"
            className="group flex mx-1 my-0 pr-[5px] cursor-pointer"
            key={tech.id}
          >
            <Image
              src={tech.technology.icon}
              alt={tech.technology.name}
              width={20}
              height={20}
              className={`inline-block m-1 rounded-[20%] ${
                theme === "light" &&
                "filter grayscale contrast-150 brightness-90"
              }`}
            />
            {tech.technology.name}
            <Button
              className="lg:opacity-0 group-hover:opacity-100 w-[12px] h-[12px] rounded-full cursor-pointer transition-opacity duration-200"
              variant={"ghost"}
              size={"icon"}
              onClick={() => handleItemTechnologyChange(tech)}
            >
              <X />
            </Button>
          </Badge>
        ))}
      </div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="cursor-pointer">
            <ChevronDown /> Tecnologías
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filtrar</DropdownMenuLabel>

          <DropdownMenuSeparator />

          {/* <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem> */}

          {technologiesDropdown.map(
            (technologies: TechnologyDropdown, index) => (
              <DropdownMenuCheckboxItem
                key={technologies.technology.id + index}
                checked={technologies.checked}
                className="cursor-pointer"
                onCheckedChange={() => handleItemTechnologyChange(technologies)}
              >
                {technologies.technology.name}
                <Image
                  src={technologies.technology.icon}
                  alt={technologies.technology.name}
                  width={20}
                  height={20}
                  className={`inline-block m-1 rounded-[20%] ${
                    theme === "light" &&
                    "filter grayscale contrast-150 brightness-90"
                  }`}
                />
              </DropdownMenuCheckboxItem>
            )
          )}

          {/* Item bloqueado ejemplo */}
          {/* <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
