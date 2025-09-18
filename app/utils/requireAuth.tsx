import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "~/utils/auth";

export default function RequireAuth() {
  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
}
