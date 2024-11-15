import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string; 
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, ...props }, ref) => (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <textarea
        ref={ref}
        className={cn(
          "w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none",
          className
        )}
        {...props}
      />
    </div>
  )
);

Textarea.displayName = "Textarea";
