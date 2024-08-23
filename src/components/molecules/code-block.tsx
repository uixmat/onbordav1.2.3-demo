"use client";
import React from "react";
import hljs from "highlight.js";

interface CodeBlockProps {
  language: string;
  code: any;
}

export const CodeBlock = ({ language, code }: CodeBlockProps) => {
  React.useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="w-full px-6 pt-4 pb-4 border-t border-border">
      <pre className="code-theme overflow-x-auto max-w-full text-xs leading-6">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
