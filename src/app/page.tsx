"use client";
import ProjectsComponent from "@/components/projects-component/ProjectsComponent";
import { SettingsState, useSettingsStore } from "@/store/settings";
import { stringsEs } from "@/content/strings-es";
import { stringsEn } from "@/content/strings-en";

export default function Home() {
  const language = useSettingsStore((s: SettingsState) => s.language);
  const strings = language === "es" ? stringsEs : stringsEn;

  return (
    <>
      <main
        className="w-screen min-h-screen flex flex-col justify-center items-center font-[family-name:var(--font-fira-code)] 
       z-[10] overflow-x-hidden"
      >
        <section
          id="home"
          className="w-full max-w-7xl h-screen px-3 
        flex flex-col justify-center items-start"
        >
          <h1 className="text-3xl mb-5 text-title font-bold">
            {strings.title}
          </h1>
          <p className="text-main-text text-left max-w-2xl">
            {strings.description}
          </p>

        </section>

        <ProjectsComponent />
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer> */}
    </>
  );
}