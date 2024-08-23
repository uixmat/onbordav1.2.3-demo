"use client";
import { useRef } from "react";

// sonner
import { toast } from "sonner";

// shadcn
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";

// assets
import { CopySlash } from "lucide-react";

export const CopyInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          toast.success("Copied to clipboard");
          console.log("Copied to clipboard");
        })
        .catch((err) => {
          toast("Copied to clipboard");
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={110}>
        <TooltipTrigger asChild>
          <Input
            ref={inputRef}
            value="pnpm i onborda"
            className="text-center font-mono cursor-pointer"
            readOnly
            iconEnd={<CopySlash size={14} />}
            onClick={copyToClipboard}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
