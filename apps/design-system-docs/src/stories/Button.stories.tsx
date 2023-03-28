// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonProps } from "ui";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "click",
  variant: "primary",
  size: "large",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "click",
  variant: "secondary",
  size: "large",
};
