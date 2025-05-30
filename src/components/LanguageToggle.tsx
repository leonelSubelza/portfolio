"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const getDropdownMenuItem = (source: string, alt: string) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <span className="mr-1">{alt}</span>
      <Image
        src={source}
        alt={alt}
        width={20}
        height={20}
        className="inline-block mr-2"
      />
    </div>
  );
};

export default function LanguageToggle() {
  const [language, setLanguage] = useState<string>("spanish");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {language === "spanish" ? (
            getDropdownMenuItem("/flags/ar.svg", "Spanish")
          ) : (
            getDropdownMenuItem("/flags/us.svg", "English")
          )}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("spanish")}>
          {getDropdownMenuItem("/flags/ar.svg", "Spanish")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("english")}>
          {getDropdownMenuItem("/flags/us.svg", "English")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
