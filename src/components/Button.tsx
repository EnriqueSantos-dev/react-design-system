import React, { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, asChild }) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component className="py-4 px-2 text-sm w-full bg-cyan-300 hover:bg-cyan-500 transition-colors focus:ring-2 ring-white outline-none font-semibold text-black rounded">
      {children}
    </Component>
  );
};

Button.defaultProps = {
  asChild: false,
};
