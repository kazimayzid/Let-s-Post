import "./App.css";


import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayOut from "./components/RootLayOut/RootLayOut";
import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Feed from "./pages/Feed/Feed";
import Home from "./pages/Home/home";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        { index: true, element: <Welcome /> },
        { path: "/signUp", element: <SignUp /> },
        { path: "/signIn", element: <SignIn /> },
      ],
    },
    {
      path: "/feed",
      element: <Feed/>,
      children: [
        {index: true, element: <Home/>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
