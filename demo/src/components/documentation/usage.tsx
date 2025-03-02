import React from "react";
import CodeBlock from "../CodeBlock";

const Usage: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-8 mb-4">Usage</h2>
      <p className="mb-4 text-gray-600">
        Import the component and its styles in your React application:
      </p>
      <CodeBlock
        code={`// Import the component
import { Contributors } from 'react-contributors';
// Import the styles (required)
import 'react-contributors/dist/react-contributors.css';

// Single repository
<Contributors owner="facebook" repo="react" />

// Multiple repositories
<Contributors owner="tailwindlabs" repo={['EasyButton', 'EasyBuzzer']} />`}
      />
    </div>
  );
};

export default Usage;
