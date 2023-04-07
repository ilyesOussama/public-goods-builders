import React from "react";
import { Meta, Story } from "@storybook/react";
import { Avatar, AvatarProps } from "ui";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Sizes = () => (
  <div className="flex flex-row gap-2 items-center">
    <Avatar size="xs" imageUrl="https://via.placeholder.com/60x60" />
    <Avatar size="sm" imageUrl="https://via.placeholder.com/60x60" />
    <Avatar size="md" imageUrl="https://via.placeholder.com/60x60" />
    <Avatar size="lg" imageUrl="https://via.placeholder.com/60x60" />
    <Avatar size="xl" imageUrl="https://via.placeholder.com/60x60" />
  </div>
);

Sizes.parameters = {
  controls: { hideNoControlsWarning: true },
};
