import { CopyInput } from "@/components/molecules/copy-input";

export const GetStarted = () => {
  return (
    <div className="w-full">
      <div className="container text-center space-y-4">
        <h3 className="text-black dark:text-white text-lg font-extralight">
          Get started
        </h3>

        <div className="w-full max-w-80 m-auto">
          <div className="flex items-center justify-center w-max m-auto gap-3">
            <CopyInput />
          </div>
        </div>
      </div>
    </div>
  );
};
