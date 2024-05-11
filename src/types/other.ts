export enum PagePaths {
  "Profile" = "/profile",
  "NewTodo" = "/new-todo",
  "MyTodo" = "/my-todos",
}

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type todoSortTypes = "newest" | "oldest";
export type sortOption = { label: string; value: todoSortTypes };
export type SelectProps = { options: sortOption[] };
export type eventSortType = { target: { value: todoSortTypes } };

// export type todoFilterOptions
