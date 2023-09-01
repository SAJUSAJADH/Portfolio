import { useState } from "react";



export default function Nav(){

    const [isToggle, setIstoggle] = useState(false);

    const menus =[
        {name:"Home",href: "/"},
        {name:"About",href: "#about"},
        {name:"Projects",href: "#projects"},
        {name:"Contact",href: "#contact"},
    ]

    const open =()=>{
        setIstoggle(!isToggle)
    }

    

    return(
        <>
            <div className="px-12 py-7 bg-white fixed w-full z-50 shadow-md flex justify-between">
                <h2 className="font-bold text-xl font-sans">Sajadh.dev</h2>
                <div className="hidden md:flex gap-4">
                    {menus.map((menu,index)=>(
                        <a key={index} className="font-bold text-lg font-sans hover:text-blue-500 transition duration-300 cursor-pointer" href={menu.href}>{menu.name}</a>
                    ))}
                </div>
                <button onClick={open} id="menu-btn" className={isToggle ? 'open block hamburger md:hidden focus:outline-none ml-auto' : 'block hamburger md:hidden focus:outline-none ml-auto'}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
                <div className="md:hidden">
                    <div onClick={open} id="menu" className={isToggle ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white text-[#000] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" }>
                        {menus.map((menu,index)=>(
                            <a key={index} href={menu.href}>{menu.name}</a>
                        ))}
                     </div>
                </div>
            </div>
        </>
    )
}