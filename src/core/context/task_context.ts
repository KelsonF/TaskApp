import { createContext } from "react";
import { Task } from "../interfaces/Task";
import { Action } from "../reducers/task_reducer";

export const TasksContext = createContext<Task[]>([]);

export const TasksDispatchContext = createContext<React.Dispatch<Action>>((action: Action) => { action });
