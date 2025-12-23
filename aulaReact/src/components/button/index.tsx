import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {
    name: string
}

export function Button({name, ...rest}: Props) {
    return (
        <button className={styles.content} {...rest}>{name}</button>
    )
}