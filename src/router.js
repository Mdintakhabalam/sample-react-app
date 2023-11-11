import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

export const router = [
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> },
];