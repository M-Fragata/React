import { Routes, Route } from "react-router"

import { Layouts } from "../components/Layouts/Layouts"
import { Home } from "../pages/Home/Home"
import { Products } from "../pages/Products/Products"
import { NotFound } from "../pages/NotFound/NotFound"
import { Details } from "../pages/Details/Details"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}