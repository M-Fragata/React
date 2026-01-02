type Props = React.ComponentProps<"button"> & {
    src?: string
    alt?: string
    value?: string
    isLoading?: boolean
}

export function Button({value, src, alt ,type = "button", isLoading, ...rest}: Props){
    return (
        <button 
        {...rest} 
        type={type} 
        disabled={isLoading}
        className="bg-green-200 p-3 mt-8 rounded-2xl text-white cursor-pointer hover:opacity-90 transition ease-linear disabled:opacity-50, disabled:cursor-progress shadow">
        {value && value}
        {src && <img src={src} alt={alt} />}
        </button>
    )
}