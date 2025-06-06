export interface ExampleInterface {
  title: string;
  description: string;
}

// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
}

// interfaces/index.ts
export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
