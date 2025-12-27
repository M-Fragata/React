import styles from "./App.module.css"
import { useEffect, useState } from "react"

import { Header } from './components/Header/header.tsx'
import { Tip } from './components/Tip/tip.tsx'
import { Letter } from './components/Letter/letter.tsx'
import { Button } from "./components/Button/Button.tsx"
import { Input } from "./components/Inputt/Input.tsx"
import { LettersUsed } from './components/LettersUsed/letterUsed.tsx'
import { WORDS } from './utils/words.ts'
import type { Challenge } from './utils/words.ts'
import type { lettersUsedProps } from './components/LettersUsed/letterUsed.tsx'
export function App() {

  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [lettersUsed, setLetterUsed] = useState<lettersUsedProps[]>([])

  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)
    setAttempts(0)
    setScore(0)
    setLetter("")
    setLetterUsed([])
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra!")
    }

    const value = letter.toUpperCase()

    const exists = lettersUsed.find((used) => used.value.toUpperCase() === value)

    if (exists) {
      return alert(`A letra "${value}" já foi utilizada`)
    }

    const hits = challenge.word.toUpperCase().split("").filter((char) => char === value).length

    const correct = hits > 0

    setLetterUsed((prevState) => [...prevState, { value: `${value}`, correct: correct }])

    if (!correct) {
      setAttempts(attempts + 1)
    }
    setScore(score + hits)
    setLetter("")
  }

  useEffect(() => { startGame() }, [])

  if (!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        <Tip tip={challenge.tip} />

        <aside className={styles.word}>
          {
            challenge.word.split("").map((letter, index) => {

              const letterUsed = lettersUsed.find((used) => used.value.toUpperCase() === letter.toUpperCase())

              console.log(letterUsed)

              return <Letter key={index} value={letterUsed?.value} />
            })
          }

        </aside>

        <h4>Palpite</h4>

        <section className={styles.guess}>
          <Input value={letter} onChange={(e) => setLetter(e.target.value)} />
          <Button title="Carregar" onClick={handleConfirm} />
        </section>


        <LettersUsed data={lettersUsed} />

      </main>

    </div>
  )
}