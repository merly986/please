
import { Navigate } from "react-router-dom";

function ProtectedRoute({ render: Component, loggedIn, ...props }) {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="sing-in" replace />
  );
}

export default ProtectedRoute;
