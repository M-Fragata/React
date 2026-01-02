import { Routes, Route } from "react-router"

import { AppLayout } from "../components/AppLayout.tsx";
import { Dashboard } from "../pages/dashboard.tsx";
import { NotFound } from "../pages/NotFound.tsx";

export function ManagerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}