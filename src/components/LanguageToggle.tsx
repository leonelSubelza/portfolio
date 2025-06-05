"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useTheme } from "next-themes";

const getDropdownMenuItem = (source: string, alt: string, theme: string) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <span className="mr-1">{alt}</span>
      <Image
        src={source}
        alt={alt}
        width={20}
        height={20}
        className={`inline-block mr-2 ${
          theme === "light" && "filter grayscale contrast-90 brightness-120"
        }`}
      />
    </div>
  );
};

export default function LanguageToggle() {
  const [language, setLanguage] = useState<string>("spanish");

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // o un loading spinner

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {language === "spanish"
            ? getDropdownMenuItem("/flags/ar.svg", "Spanish",theme as string)
            : getDropdownMenuItem("/flags/us.svg", "English",theme as string)}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("spanish")}>
          {getDropdownMenuItem("/flags/ar.svg", "Spanish",theme as string)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("english")}>
          {getDropdownMenuItem("/flags/us.svg", "English",theme as string)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
