import "./App.css";
import RootLayOut from "./components/Container/RootLayOut/RootLayOut";
import SignIn from "./components/Container/SignIn/SignIn";

import { createBrowserRouter, RouterProvider } from "react-router";
import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/SignUp/Home/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        { index: true, element: <Welcome /> },
        { path: "signUp", element: <SignUp /> },
        { path: "signIn", element: <SignIn /> },
      ],
    },
    {
      path: "/home",
      element: <Home/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
