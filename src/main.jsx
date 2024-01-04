import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/Routes.jsx";
import "./assets/styles/main.scss";
import AuthProvider from "./providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import queryConfig from "./query-config.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const queryClient = new QueryClient(queryConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
