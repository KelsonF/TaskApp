import { useContext } from "react";
import { TasksContext } from "../context/task_context";

export function useTasks() {
  return useContext(TasksContext);
}
