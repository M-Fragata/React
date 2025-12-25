
import styles from "./palpite.module.css"

type Input = React.ComponentProps<"input">

export function Palpite({...rest}: Input) {
    return (
        <section className={styles.palpite}>
            <label htmlFor="palpite">Palpite</label>
            <aside>
                <input type="text" id="palpite" {...rest} autoFocus maxLength={1} placeholder="?"/>
                <button type="submit">Confirmar</button>
            </aside>
        </section>
    )
}