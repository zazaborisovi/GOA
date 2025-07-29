import { redirect } from "react-router";
import user from "./user.ts"
export function publicOnlyLoader() {
  if (user) {
    return redirect("/dashboard");
  }
}