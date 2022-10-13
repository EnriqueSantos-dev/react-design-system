import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface TextFieldProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  size = "md",
  children,
  asChild = false,
  className,
}) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};

TextField.defaultProps = {
  asChild: false,
  size: "md",
  className: "",
};
