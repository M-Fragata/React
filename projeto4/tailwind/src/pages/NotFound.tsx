import astro from "../assets/astro.png"

export function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col items-center bg-black ">
            <img className="w-2xl bg-transparent bg-none"
            src={astro} alt="imagem de um astronauta no espaço" />
            <h1 className="font-bold text-white">Ooops, parece que você está perdido! <br />
            <a href="/" className="flex justify-center hover:opacity-90"><strong>Retorne para a nave!</strong></a>
            </h1>
        </div>
    )
}