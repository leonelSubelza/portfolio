import type { Metadata } from "next";
import { Roboto, Fira_Code, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});
const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonel Subelza - Full Stack Developer",
  description: "Portfolio of Leonel Subelza, a Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${firaCode.variable} ${sourceCodePro.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed top-[0px] w-full h-[7rem] backdrop-blur-[2px]text-lg font-[family-name:var(--font-source-code-pro)]">
            <nav className="w-full h-full flex flex-wrap justify-between items-center">
              <div className="flex ml-2">
                Leonel Subelza
              </div>
              <div className="w-[50%] flex justify-between items-center">
                <ul className="w-full flex flex-wrap justify-evenly items-center mx-3">
                  <li className="flex justify-center items-center hover:text-links-hover">
                    <a href="/">Home</a>
                  </li>
                  <li className="flex justify-center items-center hover:text-links-hover">
                    <a href="/projects">Projects</a>
                  </li>
                  <li className="flex justify-center items-center hover:text-links-hover">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
                <div className="w-[40%] flex flex-wrap justify-between items-center">
                  {/* <button>Dark/Light</button>
                  <select name="select">
                    <option value="value1">Spanish</option>
                    <option value="value3">English</option>
                  </select> */}
                  <ModeToggle />
                  <LanguageToggle />
                </div>
              </div>
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
