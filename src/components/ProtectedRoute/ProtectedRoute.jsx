import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ Component, role, roles }) {
  const token = Cookies.get("jwt_token");

  if (!token) return <Navigate to="/login" replace />;

  const decoded = jwtDecode(token);
  const userRole = decoded.role;

  if (role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  if (roles && !roles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
}
