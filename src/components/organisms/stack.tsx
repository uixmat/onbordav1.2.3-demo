import { Framer } from "@/components/svgs/framer";
import { Next } from "@/components/svgs/next";
import { Radix } from "@/components/svgs/radix";
import { Tailwind } from "@/components/svgs/tailwind";

export const Stack = () => {
  return (
    <div className="w-full">
      <div className="container text-center space-y-4">
        <h3 className="text-black dark:text-white text-lg font-extralight">
          Built with
        </h3>
        <div className="flex items-center justify-center space-x-10">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="aspect-square w-20 flex items-center justify-center">
              <Next className="w-16 h-16" />
            </div>
            <span className="font-mono text-xs text-zinc-400">Next.js</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="aspect-square w-20 flex items-center justify-center">
              <Framer className="w-14 h-14" />
            </div>
            <span className="font-mono text-xs text-zinc-400">
              Framer Motion
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="aspect-square w-20 flex items-center justify-center">
              <Radix className="w-16 h-16" />
            </div>
            <span className="font-mono text-xs text-zinc-400">Radix</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="aspect-square w-20 flex items-center justify-center">
              <Tailwind className="w-14 h-8" />
            </div>
            <span className="font-mono text-xs text-zinc-400">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
