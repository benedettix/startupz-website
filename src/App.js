import "./App.css";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
