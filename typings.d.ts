import { Todo } from '@prisma/client';

type Board = {
  columns: Map<TypedColumn, Columnn>;
};

type TypedColumn = 'todo' | 'inProgress' | 'done';

type Columnn = {
  id: 'TypedColumn';
  todos: Todo[];
};
