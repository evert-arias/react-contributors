import React from "react";

import Contributors from "react-contributors";

// Username of the repo(s) owner.
const owner = "evert-arias";

// Repository name or array with multiple repositories names.
const repos = ["EasyButton", "easybtn.earias.me"];

const App = () => {
  return <Contributors owner={owner} repo={repos} />;
};

export default App;
