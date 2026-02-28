import {Route , Routes} from "react-router"
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./context/authContext";
import { Protect } from "./context/utils/protect";

export default function App(){
  return (
    <AuthProvider>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={
            <Protect>
              <Dashboard />
            </Protect>
          }/>
        </Routes>
    </AuthProvider>
  );
};
