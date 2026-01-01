import { useState } from "react"

import { Input } from "../components/Input.tsx"
import { Button } from "../components/Button.tsx"

export function SignIn() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function onSubmit(event: React.FormEvent) {
        
        event.preventDefault()

        setTimeout(() => {
            setIsLoading(true)
            alert(`Usuário ${email} logado com sucesso! ${password}`)
        }, 2000)

        setIsLoading(false)
    }

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
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

            <Button
                isLoading={isLoading}
                type="submit"
                value={"Entrar"}
            />

            <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear" >Criar conta</a>
        </form>
    )
}