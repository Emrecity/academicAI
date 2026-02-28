import { TypewriterEffect } from "./ui/typewriter-effect";

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "academic",
    },
    {
      text: "CVs",
    },
    {
      text: "with",
    },
    {
      text: "Deep",
      className: "text-slate-600 dark:text-blue-500",
    },
    {
      text: "Focus.",
      className: "text-slate-600 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to dream colleage starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-slate-600 border dark:border-white border-transparent text-white text-sm">
          create cv
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          book a review
        </button>
      </div>
    </div>
  );
}
