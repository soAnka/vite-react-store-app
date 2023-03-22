import React from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import styles from "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <Link to="/">The Store</Link>
        </div>
        <Routes>
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);
