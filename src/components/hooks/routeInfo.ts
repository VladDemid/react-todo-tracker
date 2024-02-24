import { PagePaths } from "../../types/other";

export const headings: Record<string, string> = {
  "/profile": "profile",
  "/new-todo": "Create new TODO",
  "/my-todos": "My Todos",
  // "/auth": "authorization",
};

export const backLinks: Record<string, string> = {
  "/profile": "/",
  "/new-todo": "/profile",
  "/my-todos": "/profile",
};

// export default headings;
