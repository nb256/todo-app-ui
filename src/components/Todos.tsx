import { Todo } from "../types/Todo";
import { default as TodoComponent } from "./Todo";

export default function Todos({
  todos,
  currentFilter,
}: {
  todos: Todo[];
  currentFilter: "ALL" | "COMPLETED" | "UNCOMPLETED";
}) {
  return (
    <div>
      {todos
        .filter((todo) => {
          if (currentFilter === "ALL") {
            return true;
          }
          if (currentFilter === "COMPLETED") {
            return todo.status === "COMPLETED";
          }
          if (currentFilter === "UNCOMPLETED") {
            return todo.status === "UNCOMPLETED";
          }
          return false;
        })
        .map(({ id, title, status }) => (
          <TodoComponent key={id} id={id} title={title} status={status} />
        ))}
    </div>
  );
}
