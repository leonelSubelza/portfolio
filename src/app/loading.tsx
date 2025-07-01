'use client';

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center font-[family-name:var(--font-roboto)] ">
      <div className="flex justify-center items-center w-[50%] h-[95%] rounded border border-slate-300 bg-background-header z-20 md:w-[50%]">
        <div className="flex flex-col flex w-[50%] h-full justify-center items-center text-center">
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
}
