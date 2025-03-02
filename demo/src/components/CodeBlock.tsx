import React from "react";

interface CodeBlockProps {
  code: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => {
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-md">
      {title && <h3 className="text-sm font-medium text-gray-900">{title}</h3>}
      <pre className="mt-2 text-sm text-gray-700 overflow-x-auto p-2">
        {code}
      </pre>
    </div>
  );
};

export default CodeBlock;
