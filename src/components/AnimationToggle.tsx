import { SettingsState, useSettingsStore } from '@/store/settings';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Zap, ZapOff } from 'lucide-react';

interface Props {
  onClick?: () => void;
}

export default function AnimationToggle({onClick}: Props) {
  const [mounted, setMounted] = useState<boolean>(false);

  const enableAnimation = useSettingsStore((s: SettingsState) => s.enableAnimations);
  const setEnableAnimation = useSettingsStore((s: SettingsState) => s.setEnableAnimation);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeToggle = () => {
    setTimeout(() => {
      setEnableAnimation(!enableAnimation);
      if(onClick) onClick();
    }, 100);
  };

  return (
    <div className='flex justify-center items-center'>
    <Button variant="secondary" size="icon" className="size-8 bg-transparent cursor-pointer hover:filter hover:brightness-[90%]" onClick={() => handleThemeToggle()}>
      {
        enableAnimation ? <Zap /> : <ZapOff />
      }
    </Button>
    </div>
  )
}
