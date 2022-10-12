import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";
import { TextField } from "./TextField";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    children: "Sign In",
    asChild: false,
  },
  decorators: [
    (Story) => (
      <div className="flex items-center gap-3">
        {Story()}
        <TextField>Aceite os termos para continuar</TextField>
      </div>
    ),
  ],
} as Meta;

export const Default: StoryObj = {};
