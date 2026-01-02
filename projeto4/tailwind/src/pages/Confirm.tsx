import { Navigate, useLocation } from "react-router"
import okSvg from "../assets/ok.svg"

export function Confirm() {

    const location = useLocation()

    if(!location.state?.fromSubmit){
        return <Navigate to={"/"} />
    }

    return (
        <div className="bg-gray-500 lg:w-[512px] rounded-xl flex flex-col items-center p-10 gap-6 shadow">
            <h1 className="text-2xl font-bold text-center  text-green-100">
                Solicitação enviada!
            </h1>

            <img 
            className="w-28"
            src={okSvg} 
            alt="Icone de OK" />

            <p className=" text-sm text-gray-200 text-center">
                Sua solicitação será analisada, e em breve o setor financeiro irá entrar em contato com você
            </p>

            <a className="w-full p-3 text-center bg-green-100 text-white rounded-lg shadow hover:opacity-90 transition ease-linear"
            href="/">
            Nova solicitação
            </a>
        </div>
    )
}