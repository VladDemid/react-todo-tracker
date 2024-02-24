export enum PagePaths {
  "Profile" = "/profile",
  "NewTodo" = "/new-todo",
  "MyTodo" = "/my-todos",
}

enum Specs {
  Director = "director",
  Worker = "worker",
}

interface User {
  name: string;
  spec: Specs;
}

const user123: User = {
  name: "Vlad",
  spec: Specs.Worker,
};

console.log(user123);
