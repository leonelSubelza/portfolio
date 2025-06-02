"use client";
import Image from "next/image";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsComponent from "@/components/projects-component/ProjectsComponent";
import { ModeToggle } from "@/components/ModeToggle";

//       <main className="flex flex-col max-w-7xl mx-auto px-4 font-[family-name:var(--font-fira-code)] 
      //  z-<1> backdrop-blur-[5px]">

export default function Home() {
  return (
    <>
      <ParticlesContainer />
      <main className="flex flex-col max-w-7xl mx-auto px-4 font-[family-name:var(--font-fira-code)] 
       z-<1>">
        <div id="" className="w-full h-[100dvh] flex flex-col items-center justify-center items-start">
          <h1 className="text-3xl mb-5 text-title font-bold">Full Stack Developer</h1>
          <p className="text-main-text text-left max-w-2xl">
            Welcome to my portfolio! I am a passionate full stack developer with
            a love for creating dynamic and responsive web applications. Explore
            my projects and get in touch!
          </p>
        </div>
        <ProjectsComponent />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
