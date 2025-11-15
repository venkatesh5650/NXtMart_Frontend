import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

/**
 * ProtectedRoute:
 * - Restricts access to authenticated users only.
 * - Simplifies route protection by validating JWT token stored in cookies.
 * - Helps maintain clean routing logic and avoids repeating auth checks in pages.
 */
const ProtectedRoute = ({ Component }) => {
  const token = Cookies.get("jwt_token");

  // Redirect unauthenticated users to login with route replacement
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Render the protected page if token exists
  return <Component />;
};

export default ProtectedRoute;
