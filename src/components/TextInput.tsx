import { Slot } from "@radix-ui/react-slot";
import React from "react";

export interface TextInputRootProps {
  children: React.ReactNode;
}

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => (
  <div className="flex items-center p-4 px-3 gap-3 w-full h-12 rounded bg-gray-80 focus-within:ring-2 ring-cyan-300">
    {children}
  </div>
);

TextInputRoot.displayName = "TextInputRoot.Root";

export interface TextInputInputProps
  extends React.HTMLAttributes<HTMLInputElement> {}

const TextInputInput: React.FC<TextInputInputProps> = ({ ...props }) => (
  <input
    className="flex-1 h-full text-gray-100 text-xs placeholder:text-gray-400 bg-transparent outline-none"
    {...props}
  />
);

TextInputInput.displayName = "TextInput.Input";

export interface TextInputIconProps {
  children: React.ReactNode;
}

const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => (
  <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
);

TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
