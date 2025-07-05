import { SettingsState, useSettingsStore } from '@/store/settings';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Zap, ZapOff } from 'lucide-react';

interface Props {
  onClick?: () => void;
}

export default function AnimationToggle({onClick}: Props) {
  // const { theme } = useTheme();
  // const [isLeft, setIsLeft] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  const enableAnimation = useSettingsStore((s: SettingsState) => s.enableAnimations);
  const setEnableAnimation = useSettingsStore((s: SettingsState) => s.setEnableAnimation);

  // const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeToggle = () => {
    // esperar 500ms antes de cambiar el tema
    setTimeout(() => {
      setEnableAnimation(!enableAnimation);
      if(onClick) onClick();
    }, 100);
  };

  return (
    <div className='flex justify-center items-center'>
      {/* <div className='mr-2'>
        <span className='text-sm'>Animation</span>
      </div>
      <button
      onClick={() => handleThemeToggle()}
      className="w-16 h-9 rounded-full bg-zinc-300 
        dark:bg-zinc-700 p-1 flex items-center transition-colors transition-all outline-none cursor-pointer
        m-auto"
    >
      <div
        className={`
          w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center
          relative transition-transform transform duration-500 ease-in-out
          ${enableAnimation ? "translate-x-7" : "translate-x-0"}
          ${theme === "light" && "filter grayscale contrast-90 brightness-120"}
        `}
      >
      </div>
    </button> */}
    <Button variant="secondary" size="icon" className="size-8 bg-transparent cursor-pointer hover:filter hover:brightness-[90%]" onClick={() => handleThemeToggle()}>
      {
        enableAnimation ? <Zap /> : <ZapOff />
      }
    </Button>
    </div>
  )
}
