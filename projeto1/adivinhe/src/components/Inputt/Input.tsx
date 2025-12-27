type InputProps = React.ComponentProps<"input">

import styles from "./Input.module.css"

export function Input({...input}:InputProps) {
    return (
        <input type="text" id="palpite" {...input} autoFocus maxLength={1} placeholder="?" />
    )
}