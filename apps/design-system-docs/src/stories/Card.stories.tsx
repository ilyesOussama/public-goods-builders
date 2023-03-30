import { Meta, Story } from "@storybook/react";
import { Card, CardProps } from "ui";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://via.placeholder.com/300x200",
  title: "Card Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
