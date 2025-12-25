import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"

import styles from "./header.module.css"

type Count = {
    current: number,
    max: number,
    onRestart: () => void
}

export function Header({ current, max, onRestart } : Count) {
    return (
        <header className={styles.container} >
            <img src={logo} alt="Logo" />

            <section>
                <span>
                    <strong>{current}</strong> de {max} tentativas
                </span>
                <button type="button" onClick={onRestart}>
                    <img src= {restart} alt="icone de reiniciar" />
                </button>
            </section>

        </header>
    )
}