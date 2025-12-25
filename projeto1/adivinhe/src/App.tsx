import { Header } from './components/Header/header.tsx'
import { Tip } from './components/Tip/tip.tsx'
import { Letter } from './components/Letter/letter.tsx'
import { Palpite } from './components/Palpite/palpite.tsx'
import { LettersUsed } from './components/LettersUsed/letterUsed.tsx'

import styles from "./App.module.css"


export function App() {

  function handleRestartGame(){
    alert("Reiniciado")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip= "Uma das linguagens de programção mais utilizadas" />

        <aside className={styles.word}>
          <Letter value="r" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </aside>
        
        <Palpite />

        <LettersUsed />

      </main>

    </div>
  )
}