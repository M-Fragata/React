import "./global.css"

import { useState, useEffect } from "react"

import { Button } from "./components/button"

import styles from "./app.module.css"

//import { useMessage } from "./hooks/useMessages.ts"

export function App() {
    const [count, setCount] = useState(0)
    //const [cards, setCards] = useState("")

    //const message = useMessage({age: 24, name: "Matheus"})

    function handleAdd() {
        setCount(count + 1)

    }
    function handleRemove() {
        if (count > 0) {
        setCount(count - 1)
        }
    }

    useEffect(() => {
        
            console.log("O valor mudou para: " + count)
        
    }, [count])

    return (
        <>
            <main className={styles.container}>

                <Button name="Adicionar" onClick={handleAdd} />
                <span id="contador">{count}</span>
                <Button name="Remover" onClick={handleRemove} />

                <div id="injetando"></div>

            </main>
            {/*
            <section>
                <form className={styles.form}>
                    <div className={styles.formInfo}>
                        <label htmlFor="name">Nome: </label>
                        <input type="text" id="name" />
                    </div>

                    <div className={styles.formInfo}>
                        <label htmlFor="age">Idade: </label>
                        <input type="number" id="age" />
                    </div>

                    <div className={styles.formInfo}>
                        <label htmlFor="distance">Distância: </label>
                        <input type="number" id="distance" />
                    </div>

                    <div className={styles.formInfo}>
                        <label htmlFor="team">Equipe: </label>
                        <input type="text" id="team" />
                    </div>
                    <div>
                        <input type="submit" value="Enviar" onClick={(event) => {
                            event.preventDefault()

                            const name = document.querySelector('#name')
                            const age = document.querySelector('#age')
                            const distance = document.querySelector('#distance')
                            const team = document.querySelector('#tean')


                            setCards(
                                `<div>
                                    <p> Nome: <strong> ${name.value} </strong> </p>
                                    <p> Idade: ${age} </p>
                                    <p> Distância: ${distance} </p>
                                    <p> Equipe: ${team} </p>
                                </div>`
                            )
                        }} />
                    </div>
                    <div>{cards}</div> 
                </form>
            </section> */}
        </>
    )
}

