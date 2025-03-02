import React from "react";

export type TabOption = "single" | "multiple";

interface TabNavigationProps {
  selectedTab: TabOption;
  onSelectTab: (tab: TabOption) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  selectedTab,
  onSelectTab,
}) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px">
        <button
          type="button"
          onClick={() => onSelectTab("single")}
          className={`px-4 py-3 text-center text-sm font-medium flex-1 sm:flex-none sm:min-w-32 ${
            selectedTab === "single"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          Single Repository
        </button>
        <button
          type="button"
          onClick={() => onSelectTab("multiple")}
          className={`px-4 py-3 text-center text-sm font-medium flex-1 sm:flex-none sm:min-w-32 ${
            selectedTab === "multiple"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          Multiple Repositories
        </button>
      </nav>
    </div>
  );
};

export default TabNavigation;
