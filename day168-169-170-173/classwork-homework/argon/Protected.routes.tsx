import {redirect } from 'react-router';
import user from "./user.ts"
export default function ProtectedRoutes() {
    if(!user){
        return redirect("/login")
    }
}
