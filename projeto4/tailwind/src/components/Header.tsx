import logoSVG from "../assets/logo.svg"
import logoutSVG from "../assets/logout.svg"

export function Header() {
    return (
        <header className="w-full flex justify-between my-8">
            <img src={logoSVG} alt="logo" />

            <div className="flex gap-2 items-center">
                <span>Olá, Usuário</span>
                <img src={logoutSVG} alt="logout" className="cursor-pointer hover:opacity-75 transition-opacity ease-linear"/>
            </div>
        </header>
    )
}