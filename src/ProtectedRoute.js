import { Route, Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

function ProtectedRoute({ element, ...props }) {
  const { user } = useUser();

  return (
    <Route
      {...props}
      element={user ? element : <Navigate to="/login" replace />}
    />
  );
}

export default ProtectedRoute;
