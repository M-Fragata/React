import styles from "./tip.module.css"
import tipIMG from "../../assets/tip.svg"

type Dica = {
    tip: string
}

export function Tip( { tip }: Dica) {
    return (
        <aside className={styles.tip}>
            <img src= {tipIMG} alt="icone de dica" />

            <article>
                <h3>Dica</h3>
                <p>{tip}</p>
            </article>
        </aside>
    )
}