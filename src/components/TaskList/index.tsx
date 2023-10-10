import { useEffect } from "react";
import { useTasks } from "../../core/hooks/useTask";
import { useTasksDispatch } from "../../core/hooks/useTaskDispatch";
import { Task } from "../../core/interfaces/Task";
import { ActionType } from "../../core/reducers/task_reducer";
import { TaskListItem } from "../Task";

const TaskList = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ActionType.LOADED, payload: { tasks: data } });
      });
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
