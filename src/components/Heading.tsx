import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface HeadingProps {
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  size = "md",
  children,
  asChild = false,
  className,
}) => {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(
        "font-bold text-gray-100",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};

Heading.defaultProps = {
  asChild: false,
  className: "",
};
