'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SettingsState {
  language: string;
  theme: string;
  setLanguage: (lang: string) => void;
  setTheme: (theme: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: 'es',
      theme: 'light',
      setLanguage: (lang: string) => set({ language: lang }),
      setTheme: (theme: string) => set({ theme: theme }),
    }),
    {
      name: 'settings', // se guarda en localStorage como "settings"
    }
  )
);