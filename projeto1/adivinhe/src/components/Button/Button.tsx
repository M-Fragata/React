type ButtonProps = React.ComponentProps<"button"> | {
    title?: string
}

import styles from "./Button.module.css"

export function Button({title, ...button}: ButtonProps) {
    return (
        <button className={styles.button} {...button}>{title}</button>
    )
}