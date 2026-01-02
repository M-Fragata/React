import { useState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { RefundItem } from "../components/RefundItem.tsx"
import { CATEGORIES } from "../utils/categories.ts"
import searchSVG from "../assets/search.svg"


const REFUND_EXAMPLE = {
    id: "01",
    username: "Matheus",
    category: "transport",
    amount: "24,30",
    categoryImg: CATEGORIES.transport.icon
}

export function Dashboard() {

    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function fetchRefunds(event: React.FormEvent) {
        event.preventDefault()

        console.log(name)
    }


    return (
        <div className="bg-gray-500 rounded-xl p-10 w-full md:min-w-3xl">
            <h1 className="text-gray-100 font-bold text-xl flex-1">
                Solicitações
            </h1>

            <form
                onSubmit={fetchRefunds}
                className=" flex items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-3 mt-6">
                <Input
                    value={name}
                    legend="Pesquisar Nome"
                    placeholder="Informe o nome"
                    onChange={(event) => setName(event.target.value)}
                />

                <Button
                    isLoading={isLoading}
                    type="submit"
                    src={searchSVG}
                    alt="Botão de buscar"
                />

            </form>

            <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
                <RefundItem data={REFUND_EXAMPLE}/>
            </div>

        </div>
    )
}