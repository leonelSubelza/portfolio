'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SettingsState {
  language: string;
  theme: string;
  enableAnimations: boolean;
  setLanguage: (lang: string) => void;
  setTheme: (theme: string) => void;
  setEnableAnimation: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: 'es',
      theme: 'light',
      enableAnimations: true,
      setLanguage: (lang: string) => set({ language: lang }),
      setTheme: (theme: string) => set({ theme: theme }),
      setEnableAnimation: (value: boolean) => set({ enableAnimations: value }),
    }),
    {
      name: 'settings', // se guarda en localStorage como "settings"
    }
  )
);