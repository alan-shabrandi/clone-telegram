import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {

    const [focusInput, setFocusInput] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-5">
            <header className="flex items-center gap-3 p-3">
                <i className="fa-regular fa-bars"></i>
                <div className={`flex items-center border border-[#dfe1e5] rounded-[20px] p-2 flex-1 ${focusInput && "border-[2px] border-[#3390ec]"}`}>
                    <i className={`fa-light fa-magnifying-glass text-[16px] ${focusInput && "text-[#3390ec]"}`}></i>
                    <input 
                        placeholder="Search"
                        className="outline-none pl-2" 
                        onFocus={() => setFocusInput(true)}
                        onBlur={() => setFocusInput(false)}
                    />
                </div>
            </header>
            <main className="flex flex-col gap-4">

                <div className="flex flex-col gap-4 p-3">
                    <div className="flex gap-2">
                        <Image src={require("../../../public/images/react.jpg")} alt="react" width={50} height={50} className="rounded-full" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between w-full">
                                <span className="truncate w-[170px]">React Team</span>
                                <span className="text-[11px]">9:59AM</span>
                            </div>
                            <p className="truncate w-[200px] text-[13px]"> تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Image src={require("../../../public/images/nodejs.png")} alt="nodejs" width={50} height={50} className="rounded-full" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between w-full">
                                <span className="truncate w-[170px]">NodeJS Team</span>
                                <span className="text-[11px]">10:20AM</span>
                            </div>
                            <p className="truncate w-[200px] text-[13px]"> تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Image src={require("../../../public/images/javascript.jpg")} alt="javascript" width={50} height={50} className="rounded-full" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between w-full">
                                <span className="truncate w-[170px]">JavaScript Team</span>
                                <span className="text-[11px]">11:20AM</span>
                            </div>
                            <p className="truncate w-[200px] text-[13px]"> تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Image src={require("../../../public/images/css.png")} alt="css" width={50} height={50} className="rounded-full" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between w-full">
                                <span className="truncate w-[170px]">CSS Team</span>
                                <span className="text-[11px]">03:10PM</span>
                            </div>
                            <p className="truncate w-[200px] text-[13px]"> تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Image src={require("../../../public/images/mongodb.png")} alt="mongodb" width={50} height={50} className="rounded-full" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between w-full">
                                <span className="truncate w-[170px]">React Team</span>
                                <span className="text-[11px]">9:59AM</span>
                            </div>
                            <p className="truncate w-[200px] text-[13px]"> تست تست تست تست تست تست تست تست</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-3 bg-[#f4f4f5]"></div>

                <div className="flex flex-col gap-4 px-3 py-1">
                    <h1 className="text-[#3390ec] font-bold">Contacts</h1>

                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                            <Image src={require("../../../public/images/users/taha.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                            <div>
                                <p>Taha Amiri</p>
                                <p className="text-black/[0.5] text-[13px]">last seen recently</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Image src={require("../../../public/images/users/mahdi.jpg")} alt="user-image" width={40} height={40} className="rounded-full" />
                            <div>
                                <p>Mahdi Sharifi</p>
                                <p className="text-black/[0.5] text-[13px]">last seen recently</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Image src={require("../../../public/images/users/alan.png")} alt="user-image" width={40} height={40} className="rounded-full" />
                            <div>
                                <p>Alan Shabrandi</p>
                                <p className="text-black/[0.5] text-[13px]">last seen recently</p>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Sidebar;