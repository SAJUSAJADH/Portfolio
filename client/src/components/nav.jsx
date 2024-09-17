import { useState } from "react";

export default function Nav() {
  const [isToggle, setIstoggle] = useState(false);

  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const open = () => {
    setIstoggle(!isToggle);
  };

  return (
    <div className="bg-white fixed md:top-3 flex mx-auto rounded-xl shadow-md w-full md:w-5/6 z-50">
      <div className="flex items-center justify-between px-12 py-5 w-full">
        <div className="flex">
          <a href="/" className="font-bold text-xl font-sans">
            Sajadh.eth
          </a>
        </div>
        <div className="hidden md:flex gap-4">
          {menus.map((menu, index) => (
            <a
              key={index}
              className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
              href={menu.href}
            >
              <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0 translate-y-8"></span>
              <span className="relative">{menu.name}</span>
            </a>
          ))}
        </div>
        <button
          onClick={open}
          id="menu-btn"
          className={
            isToggle
              ? "open block hamburger md:hidden focus:outline-none ml-auto"
              : "block hamburger md:hidden focus:outline-none ml-auto"
          }
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div className="md:hidden">
          <div
            onClick={open}
            id="menu"
            className={
              isToggle
                ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white text-[#000] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md rounded-xl"
                : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md rounded-xl"
            }
          >
            {menus.map((menu, index) => (
              <a
                key={index}
                className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
                href={menu.href}
              >
                <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0 translate-y-8"></span>
                <span className="relative">{menu.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
