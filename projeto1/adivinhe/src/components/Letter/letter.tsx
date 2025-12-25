import styles from "./letter.module.css"

type Props = {
    value?: string
}

export function Letter ( {value = ""}: Props  ) {
    return (
        <aside className={styles.letter}>
            <span>{value}</span>
        </aside>
    )
}