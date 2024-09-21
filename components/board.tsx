import { fetchTodosByStatus } from '@/actions/todo.action';

export default async function Board() {
  const todos = await fetchTodosByStatus();
  console.log(todos);

  return <div>board</div>;
}
