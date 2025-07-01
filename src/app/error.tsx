"use client";

import { TriangleAlert } from "lucide-react";
import { stringsEs } from "@/content/strings-es";
import { stringsEn } from "@/content/strings-en";
import { SettingsState, useSettingsStore } from "@/store/settings";

export default function ErrorPage({ error }: { error: Error }) {
  const language = useSettingsStore((s: SettingsState) => s.language);
  const strings = language === "es" ? stringsEs : stringsEn;

  console.error(error);

  return (
    <div className="w-full h-screen flex justify-center items-center font-[family-name:var(--font-roboto)]">
      <div className="flex justify-center items-center w-[95%] h-[50%] rounded border border-slate-300 bg-background-header z-20 md:w-[50%]">
        <div className="flex flex-col flex h-full justify-center items-center text-center">
          <h1 className="text-9xl font-bold my-2">
            {/* <img className="text-links-hover" src="./icons/error.svg" width={100} height={100}/> */}
            <TriangleAlert className="text-links-hover" width={100} height={100} />
            </h1>
          <p className="text-xl font-bold my-1">{strings.errors.error}</p>
          <p className="text-sm my-1">{error.message}</p>
        </div>
      </div>
    </div>
  );
}
