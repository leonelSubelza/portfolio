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
import { SettingsState, useSettingsStore } from "@/store/settings";

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
  const language = useSettingsStore((s: SettingsState) => s.language);
  const setLanguage = useSettingsStore((s: SettingsState) => s.setLanguage);

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
          {language === "es"
            ? getDropdownMenuItem("/flags/ar.svg", "Spanish",theme as string)
            : getDropdownMenuItem("/flags/us.svg", "English",theme as string)}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("es")}>
          {getDropdownMenuItem("/flags/ar.svg", "Spanish",theme as string)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          {getDropdownMenuItem("/flags/us.svg", "English",theme as string)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
