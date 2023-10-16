import { Link, Outlet } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
      <footer>
        <h2>Its done</h2>
      </footer>
    </>
  );
}

export { App };
