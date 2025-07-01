"use client";
import Link from "next/link";
import React from "react";
import { stringsEs } from "@/content/strings-es";
import { stringsEn } from "@/content/strings-en";
import { SettingsState, useSettingsStore } from "@/store/settings";

export default function NotFound() {
  const language = useSettingsStore((s: SettingsState) => s.language);
  const strings = language === "es" ? stringsEs : stringsEn;

  return (
    <div className="w-full h-screen flex justify-center items-center font-[family-name:var(--font-roboto)]">
      <div className="flex justify-center items-center w-[95%] h-[50%] rounded border border-slate-300 bg-background-header z-20 md:w-[50%]">
        <div className="flex flex-col flex h-full justify-center items-center text-center">
          <h1 className="text-9xl font-bold my-2">404</h1>
          <h1 className="text-xl font-bold my-1">{strings.errors.notFound.title}</h1>
          <p className="text-sm my-1">{strings.errors.notFound.description}</p>
          <p className="text-sm my-1">
            <Link className="border-b border-primary" href={"/"}>
              {strings.errors.notFound.backToHome}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
