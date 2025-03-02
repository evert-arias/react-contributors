import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-300 text-sm">
        <p>React Contributors Component • MIT License</p>
        <p className="mt-2">
          <a
            href="https://github.com/evert-arias/react-contributors"
            className="text-indigo-300 hover:text-indigo-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
