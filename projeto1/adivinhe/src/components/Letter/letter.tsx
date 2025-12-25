import styles from "./letter.module.css"

type Props = {
    value?: string,
    size?: "default" | "small",
    color?: "default" | "right" | "wrong"
}

export function Letter ( {value = "", size = "default", color = "default"}: Props  ) {
    return (
        <aside 
        className={`
        ${styles.letter} 
        ${size==="small" && styles.letterSmall} 
        ${color === "right" && styles.letterRight}
        ${color === "wrong" && styles.letterWrong}
        `}>
            <span>{value}</span>
        </aside>
    )
}