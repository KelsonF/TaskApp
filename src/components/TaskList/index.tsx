import { useEffect } from "react";
import { useTasks } from "../../core/hooks/useTask";
import { useTasksDispatch } from "../../core/hooks/useTaskDispatch";
import { Task } from "../../core/interfaces/Task";
import { ActionType } from "../../core/reducers/task_reducer";
import { TaskListItem } from "../Task";
import { useLoaderData } from "react-router-dom";

const TaskList = () => {
  const data = useLoaderData();
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  useEffect(() => {
    (async () => {
      const tasks = data as Task[];
      dispatch({ type: ActionType.LOADED, payload: { tasks } });
    })();
  }, []);

  const handleRemoveTask = (task: Task) => {
    dispatch({ type: ActionType.REMOVED, payload: { id: task.id } });
  };

  const handleSaveTask = (task: Task) => {
    dispatch({ type: ActionType.UPDATED, payload: { task } });
  };

  return (
    <>
      <h3>{tasks.length} Tarefas cadastradas</h3>
      <ul>
        {tasks.map((task) => (
          <TaskListItem
            onRemove={handleRemoveTask}
            onSave={handleSaveTask}
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </>
  );
};

export { TaskList };
