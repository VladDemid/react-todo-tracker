export enum PagePaths {
  "Profile" = "/profile",
  "NewTodo" = "/new-todo",
  "MyTodo" = "/my-todos",
}

export type todoSortTypes = "newest" | "oldest";
export type sortOption = { title: string; value: todoSortTypes };
export type eventSortType = { target: { value: todoSortTypes } };

// export type todoFilterOptions
