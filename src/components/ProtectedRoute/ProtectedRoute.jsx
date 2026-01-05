import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

/**
 * ProtectedRoute:
 * - Restricts access to authenticated users only.
 * - Optionally restricts access by role.
 *
 * Usage:
 * <ProtectedRoute Component={Dashboard} />
 * <ProtectedRoute Component={AdminDashboard} role="ADMIN" />
 */
const ProtectedRoute = ({ Component, role }) => {
  const token = Cookies.get("jwt_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (err) {
    Cookies.remove("jwt_token");
    return <Navigate to="/login" replace />;
  }

  // If role is specified and does not match → redirect
  if (role && decoded.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

export default ProtectedRoute;
