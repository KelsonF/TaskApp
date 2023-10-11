import { PropsWithChildren, useReducer } from "react";
import { TasksDispatchContext, TasksContext } from "../context/task_context";
import { TaskReducer } from "../reducers/task_reducer";

export function TasksProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(TaskReducer, { tasks: [] });

  return (
    <TasksContext.Provider value={state.tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
