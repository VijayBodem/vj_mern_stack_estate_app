import HomePage from "./pages/home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listpage from "./pages/listpage/Listpage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlrpage/SinglePage";
import LoginPage from "./pages/loginpage/LoginPage";
import Profile from "./pages/profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <Listpage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
