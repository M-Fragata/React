import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes.tsx";
import { EmployeeRoutes } from "./EmployeeRoutes.tsx";
import { ManagerRoutes } from "./ManagerRoutes.tsx";

export function Routes() {
    return (
        <BrowserRouter>
            <ManagerRoutes />
        </BrowserRouter>
    )
}