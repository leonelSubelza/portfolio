"use client";

export default function Home() {
  return (
    <>
      <main className="flex flex-col max-w-7xl mx-auto px-4 font-[family-name:var(--font-fira-code)] 
      bg-background">
        {/* <div className="absolute left-[0px] z-[-1] w-full h-full background-animation-gradient"></div> */}
        <div id="" className="w-full h-[100dvh] flex flex-col items-center justify-center items-start">
          <h1 className="text-3xl mb-5 text-title font-bold">Full Stack Developer</h1>
          <p className="text-center text-main-text sm:text-left max-w-2xl">
            Welcome to my portfolio! I am a passionate full stack developer with
            a love for creating dynamic and responsive web applications. Explore
            my projects and get in touch!
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
