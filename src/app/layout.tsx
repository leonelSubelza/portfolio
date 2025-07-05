import type { Metadata } from "next";
import { Roboto, Fira_Code, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/Navbar";
import ParticlesContainer from "@/components/ParticlesContainer";

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

{
  /* <header className="flex fixed justify-center items-center top-0 w-full z-[100] h-[7rem] backdrop-blur-[5px] text-lg font-[family-name:var(--font-source-code-pro)]"></header> */
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`flex flex-col ${roboto.variable} ${firaCode.variable} ${sourceCodePro.variable} antialiased bg-background overflow-x-hidden`} 
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex fixed justify-center items-center top-0 w-screen z-[20] h-[5rem] font-[family-name:var(--font-source-code-pro)] bg-background-header">
            <Navbar />
          </header>
          <ParticlesContainer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
