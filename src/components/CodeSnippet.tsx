"use client";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { cn } from "@/lib/utils";

export default function CodeSnippet({
  code,
  language,
  className,
}: {
  code: string;
  language: string;
  className?: string;
}) {
  return (
    <SyntaxHighlighter
      className={cn(
        "block rounded-md border border-neutral-200 dark:border-neutral-800",
        className
      )}
      language={language}
      style={oneDark}
    >
      {code}
    </SyntaxHighlighter>
  );
}
