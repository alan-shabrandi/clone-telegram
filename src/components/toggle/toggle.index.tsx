
interface Props {
    enabled: boolean,
    setEnabled: (value: boolean) => any
}

const Toggle = ({ enabled, setEnabled }: Props) => {

    return (
        <div className={`flex items-center`} onClick={() => setEnabled(!enabled)}>
            <div className={`w-[20px] h-[20px] bg-white border-2 rounded-full transition-transform duration-150 ease-linear ${enabled ? "translate-x-6 border-[#3390ec]" : "translate-x-0 border-[#A0A3BD]"}`}></div>
            <div className={`relative right-3 z-[-1] h-[16px] w-[30px] cursor-pointer rounded-[15px] ${enabled ? "bg-[#3390ec]" : "bg-[#A0A3BD]"}`}></div>
        </div>
    )
}

export default Toggle;