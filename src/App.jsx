import "./App.css";
import RootLayOut from "./components/Container/RootLayOut/RootLayOut";
import SignIn from "./components/Container/SignIn/SignIn";

import { createBrowserRouter, RouterProvider } from "react-router";
import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/welcome",
      element: <RootLayOut />,
      children: [
        { index: true, element: <Welcome /> },
        { path: "signUp", element: <SignUp /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
