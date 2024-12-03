"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  language,
  className,
}: {
  code: string;
  language: string;
  className?: string;
}) {
  return (
    <div className={cn("", className)}>
      <SyntaxHighlighter
        className="rounded-md border border-neutral-200 dark:border-neutral-800"
        language={language}
        style={oneDark}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
