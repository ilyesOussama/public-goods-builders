import React from "react";
import { Meta, Story } from "@storybook/react";
import { LoadingSpinner, LoadingSpinnerProps } from "ui";

export default {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
} as Meta;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Sizes = () => (
  <>
    <LoadingSpinner size="sm" variant="primary" />
    <LoadingSpinner size="md" variant="primary" />
    <LoadingSpinner size="lg" variant="primary" />
  </>
);

Sizes.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Variants = () => (
  <>
    <LoadingSpinner size="md" variant="primary" />
    <LoadingSpinner size="md" variant="secondary" />
  </>
);

Variants.parameters = {
  controls: { hideNoControlsWarning: true },
};
