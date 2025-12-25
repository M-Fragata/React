
import styles from "./palpite.module.css"

type Input = React.ComponentProps<"input">



export function Palpite({ ...input }: Input) {
    return (
        <section className={styles.palpite}>
            <label htmlFor="palpite">
                <h4>Palpite</h4>
            </label>
            <aside>
                <input type="text" id="palpite" {...input} autoFocus maxLength={1} placeholder="?" />
                <button type="submit">Carregar</button>
            </aside>
        </section>
    )
}