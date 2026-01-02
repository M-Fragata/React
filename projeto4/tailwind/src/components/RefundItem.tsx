
export type RefundItemProps = {
    id: string
    username: string
    category: string
    amount: string
    categoryImg: string
}

type Props = React.ComponentProps<"a"> & {
    data: RefundItemProps
}

export function RefundItem({data, ...rest}:Props) {
    return (
        <a className="flex items-center gap-3 rounded-md p-2 mt-2 hover:bg-green-100/50"
        href="#" 
        {...rest}
        >
            <img className="w-8 h-8"
            src={data.categoryImg} 
            alt="Ícone da categoria" 
            />

            <div className="flex flex-col flex-2">
                <strong className="text-sm text-gray-100">
                    {data.username}
                </strong>
                <span className="text-sx text-gray-200">
                    {data.category}
                </span>
            </div>
            <span className="text-sm text-gray-100 font-semibold">
                <small className="font-normal text-gray-200">R$ </small>
                {data.amount}
            </span>
        </a>
    )
}