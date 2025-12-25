import styles from './letterUsed.module.css'
import { Letter } from '../Letter/letter.tsx'


export function LettersUsed() {
    return (
        <section className={styles.lettersUsed}>
            <h5>Letras utilizadas</h5>

            <aside>
                <Letter value='R' size='small' color='right' />
                <Letter value='M' size='small' color='wrong'/>
            </aside>
        </section>
    )
}