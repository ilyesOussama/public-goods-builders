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
      Small
    </Badge>
    <Badge size="lg" variant="primary">
      Large
    </Badge>
  </>
);

Sizes.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Variants = () => (
  <>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
  </>
);

Variants.parameters = {
  controls: { hideNoControlsWarning: true },
};
