import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import DetailsProductErrorB from "./components/ProductDetails";
import { Provider } from "react-redux";
import store from "./store/store";

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
    <div className="m-0 h-full p-0">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <div className="m-0 bg-blue-800 p-20 text-center text-2xl text-white">
              <Link to="/">The Store</Link>
            </div>
            <Routes>
              <Route path="/details/:id" element={<DetailsProductErrorB />} />
              <Route path="/" element={<Search />} />
            </Routes>
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const rootApp = document.getElementById("app");
const container = createRoot(rootApp);
container.render(<App />);

export default App;
