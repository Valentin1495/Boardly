'use server';

import db from '@/lib/db';
import { fetchCurrentUser } from './user.action';

export async function fetchTodos() {
  const todos = await db.todo.findMany();

  return todos;
}

export async function createTodo() {
  const currentUser = await fetchCurrentUser();
  if (!currentUser) return;

  await db.todo.create({
    data: {
      userId: currentUser.id,
      title: 'Take a dog out for a walk',
      status: 'done',
    },
  });
}

export async function fetchTodosByStatus() {
  const todo = await db.todo.findMany({
    where: {
      status: 'todo',
    },
  });
  const inProgress = await db.todo.findMany({
    where: {
      status: 'inProgress',
    },
  });
  const done = await db.todo.findMany({
    where: {
      status: 'done',
    },
  });

  return {
    todo,
    inProgress,
    done,
  };
}
