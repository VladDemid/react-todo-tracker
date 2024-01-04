import { QueryCache } from "@tanstack/react-query";
import { toast } from "react-toastify";

const queryConfig = {
  queryCache: new QueryCache({
    onError: (error) => toast.error(`Something went wrong: ${error.message}`),
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
    },
    mutations: {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
    },
  },
};

export default queryConfig;
