export interface ITodo {
  id: number;
  text: string;
}

export interface Todo extends ITodo {
  done: boolean;
}
