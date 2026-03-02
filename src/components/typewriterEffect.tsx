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
    <div className="flex flex-col items-center justify-center h-[12rem] sm:h-[30rem] ">
      <p className="hidden sm:block text-neutral-600 font-semibold dark:text-neutral-200 text-base  sm:mb-10">
        The road to dream colleage starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex gap-x-2 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 sm:mt-10">
        <button className="w-32 sm:w-40 h-10 btn-primary text-sm">
          create cv
        </button>
        <button className=" w-32 sm:w-40 h-10 btn-secondary  text-sm">
          book a review
        </button>
      </div>
    </div>
  );
}
