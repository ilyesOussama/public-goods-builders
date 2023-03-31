import React from "react";
import { Meta, Story } from "@storybook/react";
import { Badge, BadgeProps } from "ui";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Sizes = () => (
  <>
    <Badge size="sm" variant="primary">
      Small Primary
    </Badge>
    <Badge size="md" variant="primary">
      Medium Primary
    </Badge>
    <Badge size="lg" variant="primary">
      Large Primary
    </Badge>
    <br />
    <Badge size="sm" variant="secondary">
      Small Secondary
    </Badge>
    <Badge size="md" variant="secondary">
      Medium Secondary
    </Badge>
    <Badge size="lg" variant="secondary">
      Large Secondary
    </Badge>
    <br />
    <Badge size="sm" variant="ghost">
      Small Ghost
    </Badge>
    <Badge size="md" variant="ghost">
      Medium Ghost
    </Badge>
    <Badge size="lg" variant="ghost">
      Large Ghost
    </Badge>
  </>
);

Sizes.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Variants = () => (
  <>
    <Badge size="md" variant="primary">
      Primary
    </Badge>
    <Badge size="md" variant="secondary">
      Secondary
    </Badge>
    <Badge size="md" variant="ghost">
      Ghost
    </Badge>
  </>
);

Variants.parameters = {
  controls: { hideNoControlsWarning: true },
};
