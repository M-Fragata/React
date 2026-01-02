import { useState } from "react"
import { useNavigate } from "react-router"

import { CATEGORIES } from "../utils/categories.ts"
import { Input } from "../components/Input.tsx"
import { Select } from "../components/Select.tsx"
import { Upload } from "../components/Upload.tsx"
import { Button } from "../components/Button.tsx"

export function Refund() {

    const [name, setName] = useState("")
    const [category , setCategory ] = useState("")
    const [amount, setAmount] = useState("")
    const [filename, setFilename] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        console.log(`${name}, ${category}, ${amount}, ${filename}`)
        navigate("/confirm", {state: {fromSubmit: true}})
    }

    return (
        <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-2xl p-10 flex flex-col gap-6 lg:min-w-[512px]">
            <header>
                <h1 className="text-xl font-bold text-gray-100">
                    Solicitação de reembolso
                </h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">
                    Dados da despesa para solicitar reembolso.
                </p>
            </header>

            <Input
                required
                legend="Nome da solicitação"
                placeholder="Informe o nome da solicitação"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <div className="flex w-full gap-4">
                <div className="flex-2">
                    <Select
                    required legend="Categoria" value={category} onChange={(event) => setCategory(event.target.value)}>
                        {
                            Object.entries(CATEGORIES).map(([category, dados]) => {
                               return <option value={category} key={category}>
                                {dados.name}
                                </option>
                            })
                        }
                    </Select>
                </div>

                <div className="flex-1">
                    <Input
                        required
                        legend="Valor"
                        placeholder="0,00"
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </div>
            </div>

            <Upload 
            legend="Comprovante" 
            filename={filename && filename.name} 
            onChange={(event) => event.target.files && setFilename(event.target.files[0])}
            />
                    
            <Button 
            type="submit" 
            value={"Enviar"} 
            isLoading={isLoading}
            />

        </form>
    )
}