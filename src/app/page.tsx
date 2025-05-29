"use client";

export default function Home() {
  return (
    <>
      <main className="flex flex-col max-w-4xl mx-auto px-4 font-[family-name:var(--font-fira-code)]">
        <div className="w-full h-[100dvh] flex flex-col items-center justify-center items-start">
          <h1 className="text-3xl text-gray-600 mb-5">Full Stack Developer</h1>
          <p className="text-center sm:text-left max-w-2xl">
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
