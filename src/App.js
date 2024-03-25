import logo from './logo.svg';
import './App.css';
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/Login";
import HostLandingPage from "./components/hostlandingpage/hostlandingpage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/host",
    element: <HostLandingPage />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
