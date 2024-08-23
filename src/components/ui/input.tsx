import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  onClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconStart, iconEnd, onClick, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center rounded-md border border-input bg-transparent px-3 py-1 h-9 w-full text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-within:ring-1 focus-within:ring-ring/10 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        onClick={onClick}
      >
        {iconStart && iconStart}
        <input
          type={type}
          className={cn("flex-1 bg-transparent focus:outline-none", className)}
          {...props}
        />
        {iconEnd && iconEnd}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
