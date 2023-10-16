import { createBrowserRouter } from "react-router-dom";
import { TaskPage } from "../pages/TaskPage";
import { AboutPage } from "../pages/AboutPage";
import { LoginPage } from "../pages/LoginPage";
import { ErrorPage } from "../pages/ErrorPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { App } from "../App";

const base_url = "http://localhost:3000/topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tasks",
        element: (
          <ProtectedRoutes>
            <TaskPage />
          </ProtectedRoutes>
        ),
        loader: async () => {
          return fetch(`${base_url}`);
        },
      },
      {
        path: "about",
        element: (
          <ProtectedRoutes>
            <AboutPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export { router };
