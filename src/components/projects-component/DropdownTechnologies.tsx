"use client"

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Technology } from "@/app/mock/entities"
import { technologies } from "@/app/mock/entities.mock"

type Checked = DropdownMenuCheckboxItemProps["checked"]

interface TechnologyDropdown {
  technology: Technology;
  checked: Checked;
}

const getTechnologyDropdownItems = (): TechnologyDropdown[] => {
  let technologiesAux: Technology[] = technologies; 
  return technologiesAux.map((tech) => ({
    technology: tech,
    checked: false, // Default unchecked
  }));
};

export function DropdownTechnologies() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  const [showPanel, setShowPanel] = useState<Checked>(false)

  const [technologiesDropdown, settechnologiesDropdown] = useState<TechnologyDropdown[]>(getTechnologyDropdownItems());

  const handleItemTechnologyChange = (technologyId: string, checked: Checked) => {

    // settechnologiesDropdown();
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Tecnologías</Button>
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

        {
          technologiesDropdown.map((technologies) => (
            <DropdownMenuCheckboxItem
              key={technologies.technology.id}
              checked={technologies.checked}
              onCheckedChange={setShowStatusBar}
            >
              {technologies.technology.name}
            </DropdownMenuCheckboxItem>
          ))
        }

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
  )
}
