import "./global.css"

import { Button } from "./components/button"

import styles from "./app.module.css"

export function App() {
    return (
        <main className= {styles.container}>

            <Button name="Agendar" onClick={() => alert("Agendado")} />
            <span>0</span>
            <Button name="Remover" />
            
        </main>
    )
}

