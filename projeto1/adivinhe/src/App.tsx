/**
 * Adicionar funcionadade de poder pular palavra
 * Adicionar funcionalidade de salvar pontuação máxima
 */
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
import close from "./assets/close.png"

export function App() {

  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [remainingAttempts, setRemainingAttempts] = useState(1)
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [lettersUsed, setLetterUsed] = useState<lettersUsedProps[]>([])
  const [showConfig, setShowConfig] = useState(false)

  function handleRestartGame() {
    const isConfirmed = confirm("Deseja reiniciar o jogo?")

    if (!isConfirmed) {
      return
    }
    startGame()
  }

  function startGame() {

    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    const remaining = Number((randomWord.word.length / 2).toFixed(0))

    setChallenge(randomWord)
    setRemainingAttempts(remaining)
    setAttempts(0)
    setScore(0)
    setLetter("")
    setLetterUsed([])
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    const isString = /^[a-zA-Z]+$/

    if (!letter.trim() || !isString.test(letter)) {
      setLetter("")
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

  function endGame(message: string) {
    alert(message)
    startGame()
  }

  useEffect(() => { startGame() }, [])

  useEffect(() => {
    if (!challenge) {
      return
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame(`Você ganhou! A palavra era "${challenge.word}"`)
      }

      if( attempts === remainingAttempts ) {
        return endGame("Que pena, você perdeu!")
      }
    }, 200)
  }, [attempts, lettersUsed.length])

  if (!challenge) {
    return
  }

  function handleConfig() {
    setShowConfig(true)
  }

  return (
    <div className={styles.container}>
      {showConfig && (
        <section className={styles.gameConfig}>
          <button className={styles.closeButton} onClick={() => setShowConfig(false)}> <img src={close} alt="fechar opções" /></button>
          <div>
            <button> Novo Jogo </button>
            <button> Carregar palavra </button>
          </div>
        </section>
      )}

      <main>
        <Header current={attempts} max={remainingAttempts} onRestart={handleRestartGame} config={handleConfig} />

        <Tip tip={challenge.tip} />

        <aside className={styles.word}>
          {
            challenge.word.split("").map((letter, index) => {

              const letterUsed = lettersUsed.find((used) => used.value.toUpperCase() === letter.toUpperCase())
              return <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? "right" : "default"} />
            })
          }

        </aside>

        <h4>Palpite:</h4>

        <section className={styles.guess}>
          <Input value={letter} onChange={(e) => setLetter(e.target.value)} />
          <Button title="Carregar" onClick={handleConfirm} />
        </section>


        <LettersUsed data={lettersUsed} />

      </main>

    </div>
  )
}