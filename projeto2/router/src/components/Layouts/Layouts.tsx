import styles from "./Layouts.module.css"

import { Outlet } from "react-router"

export function Layouts() {
    return (
        <div>
            <header className={styles.user}>
                <p>Bem vindo, Matheus!</p>
            </header>

            <Outlet />

            <footer>
                <span>Todos os direitos reservados</span>
            </footer>
        </div>
    )
}