"use client";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeSnippet({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <SyntaxHighlighter
      className="rounded-md border border-neutral-200 dark:border-neutral-800"
      language={language}
      style={oneDark}
    >
      {code}
    </SyntaxHighlighter>
  );
}
