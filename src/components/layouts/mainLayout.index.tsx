interface Props {
    children?: JSX.Element
}

const MainLayout = ({children}:Props) => {
    return (
        <div className="w-screen h-screen flex">
            <aside className="bg-red-500 w-full sm:w-[300px] h-full">
                
            </aside>
            <main className="bg-green-500 w-full h-full hidden sm:block">
                {children}
            </main>
        </div>
    )
}

export default MainLayout;