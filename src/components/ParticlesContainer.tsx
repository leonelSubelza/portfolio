"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { SettingsState, useSettingsStore } from "@/store/settings";

export default function ParticlesContainer() {
  const { theme} = useTheme();
  const [init, setInit] = useState(false);
  const [particlesColor, setParticlesColor] = useState<string>("#000");
  const [isMobile, setIsMobile] = useState(false);
  const enableAnimations = useSettingsStore((s: SettingsState) => s.enableAnimations);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 720);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  },[]);

  // Cargar engine solo una vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Cambiar color según tema
  useEffect(() => {
    if (theme === "dark") {
      setParticlesColor("#f9f9f9");
    } else {
      setParticlesColor("#4c516a");
    }
  }, [theme]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "transparent",
      //   },
      // },
      fpsLimit: 60,
      interactivity: {
        events: {
          // onClick: { enable: true, mode: "push" },
          // onHover: { enable: true, mode: "grab" },
          onClick: { enable: isMobile ? false : true, mode: "push" },
          onHover: { enable: isMobile ? false : true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.5 },
          },
        },
      },
      particles: {
        color: { value: particlesColor },
        links: {
          color: particlesColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.bounce },
          speed: 0.2,
        },
        number: {
          density: { enable: true },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [particlesColor,isMobile], // Muy importante: depende del color
  );

  if (!init) return null;

  return (
    enableAnimations ? <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    /> : null
    
  );
}