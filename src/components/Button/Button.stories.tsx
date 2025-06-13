import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Clickable: Story = {
  args: {
    children: "Click me!",
    onClick: () => alert("Button clicked!"),
  },
};
