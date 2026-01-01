import { Routes, Route } from "react-router"

import { Refund } from "../components/Refund.tsx"
import { NotFound } from "../pages/NotFound.tsx"

export function EmployeeRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="/refund" element={<Refund />} />
            </Route>

            <Route path="*" element={<NotFound />} /> 
        </Routes>
    )
}