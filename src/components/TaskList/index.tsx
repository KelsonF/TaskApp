import { Task } from "../../core/interfaces/Task";
import { TaskListItem } from "../TaskListItem";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  console.log("Lista renderizada!");

  return (
    <>
      <h3>{tasks.length} Tarefas cadastradas</h3>
      <ul>
        {tasks.map((task) => (
          <TaskListItem
            onRemove={onRemove}
            onSave={onSave}
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </>
  );
};

export { TaskList };
