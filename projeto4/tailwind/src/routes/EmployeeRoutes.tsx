import { Routes, Route } from "react-router"

import { Refund } from "../components/refund.tsx"
import { NotFound } from "../pages/NotFound.tsx"

export function EmployeeRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Refund />} />
            </Route>

            <Route path="*" element={<NotFound />} /> 
        </Routes>
    )
}