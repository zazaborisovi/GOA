import {createBrowserRouter} from "react-router";
import Login from "./src/pages/Login.tsx";
import Register from "./src/pages/Register.tsx";
import protectedRoute from "./Protected.routes.tsx"
import {publicOnlyLoader} from "./Public.protected.route.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {path: "login" , Component: Login , loader: publicOnlyLoader},
      {path: "register" , Component:Register , loader: publicOnlyLoader},
      {path: "*" , element:<div>Page not found error 404</div>},
      {path: "dashboard" , element:<div>test</div> , loader: protectedRoute}
    ],
  },
]);