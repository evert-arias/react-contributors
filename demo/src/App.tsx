import { useState } from "react";
import Layout from "./components/Layout";
import TabNavigation, { TabOption } from "./components/TabNavigation";
import Installation from "./components/documentation/installation";
import Usage from "./components/documentation/usage";
import SingleRepoExample from "./components/examples/SingleRepoExample";
import MultipleReposExample from "./components/examples/MultipleReposExample";

function App() {
  const [selectedTab, setSelectedTab] = useState<TabOption>("single");

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <TabNavigation selectedTab={selectedTab} onSelectTab={setSelectedTab} />

        <div className="p-6">
          {selectedTab === "single" && <SingleRepoExample />}
          {selectedTab === "multiple" && <MultipleReposExample />}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <Installation />
        <Usage />
      </div>
    </Layout>
  );
}

export default App;
