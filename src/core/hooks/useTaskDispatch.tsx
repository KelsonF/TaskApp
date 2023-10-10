import { useContext } from "react";
import { TasksDispatchContext } from "../context/task_context";

export function useTasksDispatch(){
    return useContext(TasksDispatchContext);
    
}