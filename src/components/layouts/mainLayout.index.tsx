import Sidebar from "../sidebar/sidebar.index";

interface Props {
    children?: JSX.Element
}

const MainLayout = ({children}:Props) => {
    return (
        <div className="w-screen h-screen flex overflow-x-hidden">
            <aside className="bg-white w-full sm:w-[400px] h-full">
                <Sidebar />
            </aside>
            <main className="w-full h-full hidden sm:block">
                {children}
            </main>
        </div>
    )
}

export default MainLayout;