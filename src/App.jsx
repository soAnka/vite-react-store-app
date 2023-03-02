import React from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <h1>Photos</h1>
      <Search />
    </div>
  );
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);
