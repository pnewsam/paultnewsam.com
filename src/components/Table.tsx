import { cva } from "class-variance-authority";

const tableVariants = cva(
  "w-full rounded-lg border [&_th]:p-4 [&_th]:text-left [&_td]:p-4 [&_tr]:border-t text-lg md:text-xl",
  {
    variants: {
      size: {
        sm: "text-sm md:text-base",
        md: "text-base md:text-lg",
        lg: "text-lg md:text-xl",
      },
    },
  }
);

export const Table = ({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) => {
  return <table className={tableVariants({ size })}>{children}</table>;
};
