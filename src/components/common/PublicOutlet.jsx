import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PublicOutlet() {
    const auth = useAuth();

    return !auth ? <Outlet /> : <Navigate to="/home" />;
}