import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/Routes.jsx";
import "./assets/styles/main.scss";
import AuthProvider from "./providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import queryConfig from "./query-config.js";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient(queryConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
