import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import profile from "../assets/profile.jpg";
import solidity from "../assets/solidity-icon.svg";
import mongo from "../assets/mongodb-icon.svg";
import express from "../assets/express-js-icon.svg";
import reactjs from "../assets/reactjs.svg";
import node from "../assets/node-js-icon.svg";
import tailwind from "../assets/tailwind.svg";
import nextjs from "../assets/nextjs-icon.svg";
import vite from "../assets/vite.svg";
import ethers from "../assets/ethersjs.svg";
import hardhat from "../assets/hardhat.svg";
import arrow from "../assets/arrow.svg";
import resume from "../assets/03022024.pdf";
import ethereum from "../assets/ethereum.webp"
import python from "../assets/python.png"
import ai from "../assets/ai.png"
import expo from "../assets/expo.png"
import typescript from "../assets/typescript.png"

const Hero = () => {
  const Techstack = [
    { name: ethereum, href: "https://ethereum.org/en/" },
    { name: ai, href: "https://ai.com/" },
    { name: solidity, href: "https://soliditylang.org/" },
    { name: hardhat, href: "https://hardhat.org/" },
    { name: ethers, href: "https://ethers.org/" },
    { name: nextjs, href: "https://nextjs.org/" },
    { name: vite, href: "https://vitejs.dev/" },
    { name: mongo, href: "https://www.mongodb.com/" },
    { name: express, href: "https://expressjs.com/" },
    { name: reactjs, href: "https://react.dev/" },
    { name: node, href: "https://nodejs.org/en" },
    { name: python, href: "https://python.org/en" },
    { name: typescript, href: "https://www.typescriptlang.org/" },
    { name: expo, href: "https://expo.dev/" },
    { name: tailwind, href: "https://tailwindcss.com/" },
  ];

  return (
    <>
      <div
        id="home"
        className="realative py-32 pt-44 md:pt-48 w-full my-auto bg-slate-100"
      >
        <div className="container mx-auto md:px-12">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="order-last lg:order-1 lg:col-span-3 grid gap-6 text-center md:text-start justify-center">
              <h2 className="text-6xl font-bold font-sans lg:pt-4">
                Fullstack Blockchain
                <br />
                Developer
              </h2>
              <p className="text-lg text-[#555]">
                Hi, I'm Sajadh S. An Ethereum Blockchain Developer based in
                Kerala, India.
              </p>
              <div className="flex gap-6 justify-center md:justify-start">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sajadh-s-916964215/"
                  className="hover:text-yellow-300 transition duration-300 cursor-pointer"
                >
                  <LinkedInIcon style={{ fontSize: "40px" }} />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/SAJUSAJADH"
                  className="hover:text-yellow-300 transition duration-300 cursor-pointer"
                >
                  <GitHubIcon style={{ fontSize: "35px" }} />
                </a>
                <a
                  href={resume}
                  download={"Resume.pdf"}
                  target=""
                  class="group relative flex w-fit h-4/5 cursor-pointer text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
                  rel="noreferrer"
                >
                  <span class="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
                  <span class="relative flex items-center justify-center gap-2">
                    Resume <img src={arrow} alt="nothing" />
                  </span>
                </a>
              </div>
            </div>
            <div className="md:order-2 lg:col-span-2 grid justify-center">
              <div className="w-72 h-72  flex items-center">
                <img
                  className="w-72 h-72 animate-border-radius"
                  src={profile}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8 xl:px-44 pt-20">
            <div className="flex justify-center lg:justify-start items-center">
              <p className="text-[#2d2e32] text-lg font-semibold">
                Tech Stack |{" "}
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-3 lg:grid-cols-5  gap-6 mx-auto lg:mx-0">
              {Techstack.map((tech, index) => (
                <a key={index} target="_blank" href={tech.href}>
                  <div
                    onClick={() => {
                      redirect(tech.href);
                    }}
                    className="z-20 shadow-lg w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer group"
                  >
                    <img
                      src={tech.name}
                      alt={tech.name}
                      className="w-14 h-14"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
