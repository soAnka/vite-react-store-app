import React from "react";
import { createRoot } from "react-dom/client";
import Product from "./Product";
import Search from "./Search";
import styles from "./style.css";

const App = () => {
  return (
    <div>
      <h1>The Store</h1>
      <Search />
    </div>
  );
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);
