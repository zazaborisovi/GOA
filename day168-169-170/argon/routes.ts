import {createBrowserRouter,} from "react-router";
import Login from "./src/pages/Login.tsx";
import Register from "./src/pages/Register.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);