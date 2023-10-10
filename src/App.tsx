import { Link, Routes } from "react-router-dom";
import { RouteProvider } from "./routes/routes.js";

function App() {
  return (
    <Routes>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/about">About</Link>
      </nav>
      <RouteProvider />
    </Routes>
  );
}

export { App };
