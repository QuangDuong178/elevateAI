import {createBrowserRouter,} from "react-router-dom";
import {Index} from "../components/pages/LoginPage";

export const router = createBrowserRouter([
    {path: "/", Component: Index},
]);