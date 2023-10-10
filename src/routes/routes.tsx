import { useRoutes } from "react-router-dom";
import { TaskPage } from "../pages/TaskPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

export function Route() {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/tasks", element: <TaskPage /> },
    { path: "/about", element: <AboutPage /> },
  ]);

  return element;
}
