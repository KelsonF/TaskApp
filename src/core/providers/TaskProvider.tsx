import { PropsWithChildren, useReducer } from "react";
import { TasksDispatchContext, TasksContext } from "../context/task_context";
import { taskStateReducer } from "../reducers/task_reducer";

export function TasksProvider({ children }: PropsWithChildren) {
  const [tasks, dispatch] = useReducer(taskStateReducer, { tasks: [] });

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
