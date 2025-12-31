import { useNavigate } from "react-router"


export function Home() {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categoria</a>


        <button type="button" onClick={() => navigate("/products")}>Ver produtos</button>
      </nav>

    </div>
  )
}