import React from "react";
import { Meta, Story } from "@storybook/react";
import { Heading, Paragraph, HeadingProps, ParagraphProps } from "ui";

export default {
  title: "Typography",
  component: Heading,
} as Meta;

const HeadingTemplate: Story<HeadingProps> = (args) => <Heading {...args} />;
const ParagraphTemplate: Story<ParagraphProps> = (args) => (
  <Paragraph {...args} />
);

export const Headings = () => (
  <>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
    <Heading level={4}>Heading 4</Heading>
    <Heading level={5}>Heading 5</Heading>
    <Heading level={6}>Heading 6</Heading>
  </>
);

Headings.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Paragraphs = () => (
  <>
    <Paragraph size="xs">Extra Small Paragraph</Paragraph>
    <Paragraph size="sm">Small Paragraph</Paragraph>
    <Paragraph size="md">Medium Paragraph</Paragraph>
    <Paragraph size="lg">Large Paragraph</Paragraph>
    <Paragraph size="xl">Extra Large Paragraph</Paragraph>
  </>
);

Paragraphs.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Combined = () => (
  <>
    <Heading level={1}>Typography</Heading>
    <Paragraph size="md">
      This is an example of how the Typography components can be used in a
      combined layout.
    </Paragraph>
    <Heading level={2}>Headings</Heading>
    <Headings />
    <Heading level={2}>Paragraphs</Heading>
    <Paragraphs />
  </>
);

Combined.parameters = {
  controls: { hideNoControlsWarning: true },
};
