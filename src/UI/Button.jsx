export const Button = ({children, onClick , className }) => {
    
    return (
        <button className={`${className} bg-blue-500 text-white font-bold px-7 rounded-md py-2`} onClick={onClick}>
            {children}
        </button>
    )
}

