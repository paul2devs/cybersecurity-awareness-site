"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange }) => (
  <SwitchPrimitive.Root
    className={cn("relative w-12 h-6 bg-gray-300 rounded-full", {
      "bg-blue-500": checked,
    })}
    checked={checked}
    onCheckedChange={onCheckedChange}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "block w-5 h-5 bg-white rounded-full transition-transform",
        {
          "translate-x-6": checked,
          "translate-x-1": !checked,
        }
      )}
    />
  </SwitchPrimitive.Root>
);
