"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  language,
  className,
  label,
}: {
  code: string;
  language: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative border bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-lg",
        className,
      )}
    >
      {label && (
        <div className="top-0 absolute right-0 px-2 py-1 bg-neutral-200 border-b border-l border-neutral-200 dark:bg-neutral-800 dark:border-neutral-800 rounded-bl-lg rounded-tr-lg">
          <span className="text-base text-neutral-500 uppercase tracking-widest">
            {label}
          </span>
        </div>
      )}
      <SyntaxHighlighter
        className="rounded-lg"
        language={language}
        style={oneDark}
        customStyle={{
          marginTop: 0,
          marginBottom: 0,
          borderRadius: "0.625rem",
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
