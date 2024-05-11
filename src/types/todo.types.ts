export type Todo = {
  id: number;
  author_id: string;
  title: string;
  duration: number;
  comment: string;
  is_done: boolean;
  created_at: string;
  updated_at: string;
  date?: any; //!
  newDay?: boolean;
  dateFormatted: any;
  //* theme: string;     //убрано
  //* deferred: false;   //убрано
  //* todo_type: string; // убрано
};

export type TodoList = Todo[];

export type TodoProps = {
  todo: Todo;
};

export type TodoFormData = {
  title: string;
  duration: number;
};
