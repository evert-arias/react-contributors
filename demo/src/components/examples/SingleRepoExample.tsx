import React from "react";
import { Contributors } from "react-contributors";
import CodeBlock from "../CodeBlock";

const SingleRepoExample: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Single Repository Example</h2>
      <p className="mb-4 text-gray-600">
        This example shows contributors from the React repository.
      </p>
      <div className="py-4">
        <Contributors owner="evert-arias" repo="EasyButton" />
      </div>
      <CodeBlock
        title="Code Example"
        code={`<Contributors owner="evert-arias" repo="EasyButton" />`}
      />
    </div>
  );
};

export default SingleRepoExample;
