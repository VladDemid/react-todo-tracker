export enum PagePaths {
  "Profile" = "/profile",
  "NewTodo" = "/new-todo",
  "MyTodo" = "/my-todos",
}

export type todoSortTypes = "newest" | "oldest";
export type sortOption = { label: string; value: todoSortTypes };
export type SelectProps = { options: sortOption[] };
export type eventSortType = { target: { value: todoSortTypes } };

// export type todoFilterOptions
