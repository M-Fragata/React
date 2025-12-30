import styles from './letterUsed.module.css'
import { Letter } from '../Letter/letter.tsx'

export type lettersUsedProps = {
    value: string
    correct?: boolean
}

type Props = {
    data: lettersUsedProps[]
}

export function LettersUsed({ data }: Props) {
    return (
        <section className={styles.lettersUsed}>
            <h5>Letras utilizadas</h5>

            <aside>
                {
                    data.map(({ correct, value }) => {
                       return <Letter key={value} value={value} size='small' color={correct ? "right" : "wrong"} />
                    })
                }

            </aside>
        </section>
    )
}