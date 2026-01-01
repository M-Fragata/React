import { Routes, Route } from "react-router"

import { SignIn } from "../pages/Signin.tsx"
import { SignUp } from "../pages/signup.tsx"
import { NotFound } from "../pages/NotFound.tsx"
import { AuthLayout } from "../components/AuthLayout.tsx"

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}