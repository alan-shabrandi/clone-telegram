import Image from "next/image"
import { useState } from "react"
import Toggle from "../toggle/toggle.index"

const Chat = () => {

    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className="flex">
            <div className="flex flex-1 flex-col h-screen" style={{ background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" }}>
                <header className="flex gap-2 p-2 items-center bg-white cursor-pointer border-x border-x-black/[0.3]" onClick={() => setShowInfo(true)}>
                    <Image src={require("../../../public/images/react.jpg")} alt="react" width={40} height={40} className="rounded-full" />
                    <div className="flex-1">
                        <h1 className="text-[15px] font-bold">Frontend Team</h1>
                        <p className="text-[14px]">5 members</p>
                    </div>
                    <div className="flex items-center gap-5 mr-3">
                        <i className="fa-regular fa-magnifying-glass text-[20px] text-black/[0.5]"></i>
                        <i className="fa-solid fa-ellipsis-vertical text-[20px] text-black/[0.5]"></i>
                    </div>
                </header>
                <main className="flex flex-col-reverse items-center flex-1 h-full overflow-auto gap-4">

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2 text-white items-end">
                        <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                        <div className="w-[500px] bg-white text-black rounded-[10px] p-2">
                            <p className="text-[#895DD5] font-bold">Taha Amiri</p>
                            <p>تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>
                </main>
                <footer className="flex items-center gap-4 mx-auto my-4">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-[15px]">
                        <i className="fa-light fa-face-smile"></i>
                        <input className="bg-transparent w-[500px] outline-none" />
                        <i className="fa-regular fa-paperclip"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-microphone text-white bg-[#3390ec] text-[20px] p-4 rounded-full w-[50px] text-center"></i>
                    </div>
                </footer>
            </div>
            <div className={`${showInfo ? "w-[400px]" : "w-0"} transition-all duration-500`}>
                <header className="flex items-center gap-4 p-[18px] font-bold">
                    <i className="fa-regular fa-xmark cursor-pointer text-[20px]" onClick={() => setShowInfo(false)}></i>
                    <p className="flex-1">Profile</p>
                    <i className="fa-light fa-pen" ></i>
                </header>
                <div className="relative">
                    <Image src={require("../../../public/images/react.jpg")} alt="react" />
                    <div className="absolute bottom-2 left-2 text-white">
                        <p className="text-[18px]">Frontend Team</p>
                        <p className="text-[13px] text-white/[0.8]">5 members</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 p-3">
                    <i className="fa-regular fa-bell text-[20px]"></i>
                    <p className="flex-1">Notification</p>
                    <Toggle enabled={toggle} setEnabled={setToggle}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Chat