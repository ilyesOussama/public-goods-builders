import React from "react";
import { Meta, Story } from "@storybook/react";
import { Dropdown } from "ui";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

export const Drop = () => {
  return <Dropdown />;
};
