import {createBrowserRouter,} from "react-router-dom";
import {LoginPage} from "../components/pages/LoginPage.tsx";

export const router = createBrowserRouter([
    {path: "/", Component: LoginPage},
]);