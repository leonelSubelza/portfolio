"use client";
import ProjectsComponent from "@/components/projects-component/ProjectsComponent";
import { SettingsState, useSettingsStore } from "@/store/settings";
import { useEffect, useState } from "react";
import { stringsEs } from "@/content/strings-es";
import { stringsEn } from "@/content/strings-en";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const language = useSettingsStore((s: SettingsState) => s.language);
  const strings = language === "es" ? stringsEs : stringsEn;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // o un loading spinner

  return (
    <>
      <main
        className=" w-full h-full flex flex-col justify-center items-center mx-auto px-3 lg:px-4 font-[family-name:var(--font-fira-code)] 
       z-[10]"
      >
        <section
          id=""
          className="w-full h-screen lg:max-w-7xl
        flex flex-col justify-center items-start"
        >
          <h1 className="text-3xl mb-5 text-title font-bold">
            {strings.title}
          </h1>
          <p className="text-main-text text-left max-w-2xl">
            {strings.description}
          </p>
          {/* <p className="text-main-text text-left max-w-2xl">
            Técnico Universitario en Informática.
          </p> */}

          {/* <div className="flex flex-wrap max-w-2xl mt-3 items-start justify-start">
              <ul className="flex justify-center items-center">
                <li>
                  <Link
                    target="_blank"
                    href={
                      "https://www.linkedin.com/in/leonel-subelza-4b57a1215/"
                    }
                  >
                    <Button variant="link" size="sm" className="cursor-pointer">
                      <Image
                        src="/icons/linkedin.svg"
                        alt="Linkedin"
                        width={30}
                        height={30}
                        className={`rounded inline-block bg-white ${
                          theme === "light" && " filter grayscale contrast-90 brightness-120"
                        }`}
                      />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={
                      "https://github.com/leonelSubelza"
                    }
                  >
                    <Button variant="link" size="sm" className="cursor-pointer">
                      <Image
                        src="/icons/github.svg"
                        alt="Github"
                        width={30}
                        height={30}
                        className={`inline-block ${
                          theme === "dark" && "filter invert-[1]"
                        }`}
                      />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={
                      "mailto:subelza150@gmail.com"
                    }
                  >
                    <Button variant="link" size="sm" className="cursor-pointer">
                      <Image
                        src="/icons/gmail.svg"
                        alt="Gmail"
                        width={30}
                        height={30}
                        className={`inline-block ${
                          theme === "light" && "filter grayscale contrast-90 brightness-120"
                        }`}
                      />
                    </Button>
                  </Link>
                </li>
              </ul>
            <span>subelza150@gmail.com</span>
          </div> */}
        </section>

        <ProjectsComponent />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
