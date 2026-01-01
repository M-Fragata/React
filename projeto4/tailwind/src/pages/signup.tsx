import { useState } from "react"

import { Input } from "../components/Input.tsx"
import { Button } from "../components/Button.tsx"

export function SignUp() {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirm, setPasswordConfirm] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        alert(`${name}, ${email}, ${password}, ${passwordConfirm}`)
    }

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">

            <Input
                required
                legend="Nome:"
                placeholder="seu nome"
                onChange={(event) => setName(event.target.value)}
            />

            <Input
                required
                legend="E-mail:"
                type="email"
                placeholder="seu@email.com"
                onChange={(event) => setEmail(event.target.value)}
            />

            <Input
                required
                legend="Senha: "
                type="password"
                placeholder="sua senha"
                onChange={(event) => setPassword(event.target.value)}
            />

            <Input
                required
                legend="Confirmar senha:"
                type="password"
                placeholder="repita a senha anterior"
                onChange={(event) => setPasswordConfirm(event.target.value)}
            />

            <Button
                isLoading={isLoading}
                type="submit"
                value={"Cadastrar"}
            />

            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear" >Já possui uma conta?</a>
        </form>
    )
}