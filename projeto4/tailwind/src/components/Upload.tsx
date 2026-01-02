import uploadSvg from "../assets/upload.svg"

type Props = React.ComponentProps<"input"> & {
    legend: string
    filename?: string | null
}

export function Upload({legend ,filename = null, ...rest}:Props) {
    return (
        <div>
            <legend className="uppercase text-xxs text-gray-200 mb-2">
                {legend}
            </legend>

            <div className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
                <input type="file" id="upload" className="hidden" {...rest} />

                <span className="text-xs text-gray-100 flex-1 pl-4">
                    {filename ?? "Selecione o arquivo"}
                </span>

                <label className="cursor-pointer flex h-12 px-4 items-center bg-green-200 rounded-r-lg hover:opacity-90 transition ease-linear"
                htmlFor="upload">
                    <img
                    src={uploadSvg} alt="Icone de upload" />
                </label>
            </div>
        </div>
    )
}