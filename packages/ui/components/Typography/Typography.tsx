import React from "react";

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <TagName
      className={`text-3xl font-bold mb-4 ${level === 1 ? "text-4xl" : ""}`}
    >
      {children}
    </TagName>
  );
};

export interface ParagraphProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  size = "md",
  children,
}) => {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };
  return <p className={`${sizes[size]} leading-6`}>{children}</p>;
};
