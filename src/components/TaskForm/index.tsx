import React, { useRef } from "react";
import { Task } from "../../core/interfaces/Task";
import { ActionType } from "../../core/reducers/task_reducer";
import { useTasksDispatch } from "../../core/hooks/useTaskDispatch";
import { ulid } from "ulidx";

export function TaskForm() {
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useTasksDispatch()

  const handleAddTask = (text: string) => {
    const task: Task = {
      id: ulid(),
      name: text,
      description: "...",
      created_at: new Date(),
      done: false,
    };

    const init = {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:3000/tasks", init).then((response) => {
      if (response.ok) {
        dispatch({ type: ActionType.ADDED, payload: { task } });
      }
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = descriptionInputRef.current!.value;

    const form = event.target as HTMLFormElement;
    form.reset();
    descriptionInputRef.current!.focus();

    handleAddTask(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={descriptionInputRef}
        placeholder="Descrição da Task"
      />
      <input type="submit" value="Adicionar Tarefa" />
    </form>
  );
}
