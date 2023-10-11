import { TaskList } from "../../components/TaskList/index.js";
import { TasksProvider } from "../../core/providers/TaskProvider.js";
import { TaskForm } from "../../components/TaskForm/index.js";

function TaskPage() {

  return (
    <TasksProvider>
      <h1>Bem vindo ao nosso gerenciador de Tasks</h1>
      <TaskForm />
      <TaskList />
    </TasksProvider>
  );
}

export { TaskPage };
