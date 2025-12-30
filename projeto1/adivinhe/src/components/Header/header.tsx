import logo from "../../assets/logo.png"
import optionsIMG from "../../assets/menu.png"
import restart from "../../assets/restart.svg"

import styles from "./header.module.css"

type Count = {
    current: number,
    max: number,
    onRestart: () => void,
    config: () => void
}

export function Header({ current, max, onRestart, config }: Count) {
    return (
        <header className={styles.container} >
            <img src={logo} alt="Logo" />

            <section>
                <span>
                    <strong>{current}</strong> de {max} tentativas
                </span>
                <div>
                    <button type="button" onClick={onRestart}>
                        <img src={restart} alt="icone de reiniciar" />
                    </button>
                    <button>
                        <img src={optionsIMG} alt="botao config" onClick={config} />
                    </button>
                </div>

            </section>

        </header>
    )
}