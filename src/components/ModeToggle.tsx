"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  const handleThemeToggle = () => {
    setIsLeft(!isLeft);
  // esperar 500ms antes de cambiar el tema
  setTimeout(() => {
    setTheme(isDark ? 'light' : 'dark')
    // setTheme(checked ? "dark" : "light")
  }, 500)
}

  return (
    <>
      <button
        onClick={() => handleThemeToggle()}
        // onClick={() => setTheme(isDark ? 'light' : 'dark')}
        // onClick={() => setIsLeft(!isLeft)}
        className="w-16 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 p-1 flex items-center transition-colors transition-all outline-none cursor-pointer"
      >
        <div
          className={`
          w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center
          relative transition-transform transform duration-500 ease-in-out
          ${isLeft ? "translate-x-7" : "translate-x-0"}
        `}
          // ${isLeft ? "translate-x-7" : "translate-x-0"}${isDark ? 'translate-x-7' : 'translate-x-0'}
        >
          {isLeft
          ? <Sun className="w-4 h-4 text-slate-400" />
          : <Moon className="w-4 h-4 text-blue-600" />
        }
          {/* {isLeft
          ? <Sun className="w-4 h-4 text-yellow-400" />
          : <Moon className="w-4 h-4 text-blue-600" />
        } */}
        </div>
      </button>
    </>
  );
}
