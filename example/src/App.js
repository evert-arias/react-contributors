import React from "react";

import Contributors from "react-contributors";

// Owner username.
const owner = "evert-arias";

// Repo(s) name. Single string or array with multiple repo names.
const repos = ["EasyButton", "easybtn.earias.me"];

const App = () => {
  return <Contributors owner={owner} repo={repos} />;
};

export default App;
