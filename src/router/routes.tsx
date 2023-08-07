import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Register } from "../auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/auth/register",
        element: <Register />,
    },
]);
