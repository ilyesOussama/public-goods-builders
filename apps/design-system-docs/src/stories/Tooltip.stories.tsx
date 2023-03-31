import { Meta, Story } from "@storybook/react";
import { Tooltip } from "ui";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story = (args) => <Tooltip />;

export const Standard = () => (
  <>
    <Tooltip />
  </>
);
