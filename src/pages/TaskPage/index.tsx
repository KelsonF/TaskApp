import { TaskList } from "../../components/TaskList/index.js";
import { TasksProvider } from "../../core/providers/TaskProvider.js";
import TaskForm from "../../components/TaskForm/index.js";
import { useTasks } from "../../core/hooks/useTask.js";

function TaskPage() {
  const tasks = useTasks();

  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </TasksProvider>
  );
}

export { TaskPage }