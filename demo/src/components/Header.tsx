import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white">React Contributors</h1>
        <p className="text-indigo-100 mt-2">
          A simple React component to display GitHub repository contributors
        </p>
      </div>
    </header>
  );
};

export default Header;
