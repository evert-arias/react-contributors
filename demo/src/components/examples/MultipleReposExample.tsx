import React from "react";
import { Contributors } from "react-contributors";
import CodeBlock from "../CodeBlock";

const MultipleReposExample: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Multiple Repositories Example
      </h2>
      <p className="mb-4 text-gray-600">
        This example shows combined and sorted contributors from multiple
        repositories of the same owner.
      </p>
      <div className="py-4">
        <Contributors owner="evert-arias" repo={["EasyButton", "EasyBuzzer"]} />
      </div>
      <CodeBlock
        title="Code Example"
        code={`<Contributors owner="evert-arias" repo={['EasyButton', 'EasyBuzzer']} />`}
      />
    </div>
  );
};

export default MultipleReposExample;
