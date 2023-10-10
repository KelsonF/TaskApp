import { Routes, Route } from "react-router-dom";
import { TaskPage } from "../pages/TaskPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { LoginPage } from "../pages/LoginPage";
import { ErrorPage } from "../pages/ErrorPage";

export function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tasks">
        <Route index element={<TaskPage />} />
        <Route path=":id" element={<AboutPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
