import { Framer } from "@/components/svgs/framer";
import { Next } from "@/components/svgs/next";
import { Radix } from "@/components/svgs/radix";

export const Stack = () => {
  return (
    <div className="w-full">
      <div className="container text-center space-y-4">
        <h3 className="text-black dark:text-white text-lg font-extralight">
          Built with...
        </h3>
        <div className="flex items-center justify-center space-x-10">
          <div className="flex flex-col items-center justify-center space-y-3">
            <Next className="w-16 h-16" />
            <span className="font-mono text-xs text-zinc-400">Next.js</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <Framer className="w-16 h-16" />
            <span className="font-mono text-xs text-zinc-400">
              Framer Motion
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <Radix className="w-16 h-16" />
            <span className="font-mono text-xs text-zinc-400">Radix</span>
          </div>
        </div>
      </div>
    </div>
  );
};
