import { Meta, StoryObj, ArgTypes } from "@storybook/react";

import { TextField, TextFieldProps } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  args: {
    size: "sm",
    children: "Lorem ipsum",
    asChild: false,
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  } as ArgTypes,
} as Meta<TextFieldProps>;

export const Default: StoryObj<TextFieldProps> = {
  args: {
    size: "md",
  },
};

export const Small: StoryObj<TextFieldProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextFieldProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextFieldProps> = {
  args: {
    asChild: true,
    children: <p>Custom TextField with Slot </p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  } as ArgTypes,
};
