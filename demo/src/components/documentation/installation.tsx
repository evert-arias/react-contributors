import React from 'react';
import CodeBlock from '../CodeBlock';

const Installation: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Installation</h2>
      <p className="mb-4 text-gray-600">
        Add the React Contributors component to your project:
      </p>
      <CodeBlock code={`npm install react-contributors`} />
    </div>
  );
};

export default Installation;