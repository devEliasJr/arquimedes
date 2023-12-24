import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DefaultLayout from "./Layouts/defaultLayout";
import SignInPage from "./Pages/SignIn";

import { RequireAuth } from "./contexts/requireAuth";
import { useAuthContext } from "./contexts/authContext";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import HomePage from "./Pages/Home";

export default function App() {
  const auth = useAuthContext();
  const user = auth.user;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<DefaultLayout />}>
        <Route
          index
          element={!user ? <HomePage /> : <Navigate to="/dashboard" />}
        />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />}></Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
