import { TaskList } from "../../components/TaskList/index.js";
import { TasksProvider } from "../../core/providers/TaskProvider.js";
import { TaskForm } from "../../components/TaskForm/index.js";

function TaskPage() {

  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <TaskForm />
      <TaskList />
    </TasksProvider>
  );
}

export { TaskPage };
