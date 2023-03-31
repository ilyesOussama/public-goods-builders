import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "ui";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;
const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);
export const Sizes = () => (
  <>
    <h2>X-Small</h2>
    <Template size="xs" />
    <h2>Small</h2>
    <Template size="sm" />
    <h2>Medium</h2>
    <Template size="md" />
    <h2>Large</h2>
    <Template size="lg" />
    <h2>X-Large</h2>
    <Template size="xl" />
  </>
);
export const Variants = () => (
  <>
    <h2>Primary</h2>
    <Template variant="primary" />
    <h2>Secondary</h2>
    <Template variant="secondary" />
    <h2>Success</h2>
    <Template variant="success" />
    <h2>Warning</h2>
    <Template variant="warning" />
    <h2>Error</h2>
    <Template variant="error" />
    <h2>Outline</h2>
    <Template variant="outline" />
    <h2>Ghost</h2>
    <Template variant="ghost" />
  </>
);
