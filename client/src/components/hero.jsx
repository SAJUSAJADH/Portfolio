import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import profile from '../assets/profile.png';
import solidity from '../assets/solidity-icon.svg';
import mongo from '../assets/mongodb-icon.svg';
import express from '../assets/express-js-icon.svg';
import reactjs from '../assets/reactjs.svg';
import node from '../assets/node-js-icon.svg';
import tailwind from '../assets/tailwind.svg';
import nextjs from '../assets/nextjs-icon.svg';
import vite from '../assets/vite.svg';



const Hero = () => {

 
    const Techstack = [
        {name: solidity, href:"https://soliditylang.org/"}, 
        {name: nextjs, href:"https://nextjs.org/"}, 
        {name: vite, href:"https://vitejs.dev/"}, 
        {name: mongo, href:"https://www.mongodb.com/"}, 
        {name: express, href:"https://expressjs.com/"}, 
        {name: reactjs, href:"https://react.dev/"}, 
        {name: node, href:"https://nodejs.org/en"}, 
        {name: tailwind, href:"https://tailwindcss.com/"}
    ]

    

  return (
    <>
        <div id="home" className="realative py-32 pt-40 md:pt-48 w-full my-auto bg-slate-100">
            <div className="container md:ps-36">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className='order-last md:order-1 grid gap-6 text-center md:text-start justify-center'>
                        <h2 className="text-6xl font-bold font-sans lg:pt-4">Fullstack Blockchain<br/>Developer</h2>
                        <p className="text-lg text-[#555]">Hi, I'm Sajadh S. A Blockchain Solidity Developer based in Kerala, India.</p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a target='_blank' href="https://www.linkedin.com/in/sajadh-s-916964215/" className="hover:text-blue-500 transition duration-300 cursor-pointer"><LinkedInIcon style={{fontSize:'40px'}}/></a>
                            <a target='_blank' href="https://github.com/SAJUSAJADH" className="hover:text-blue-500 transition duration-300 cursor-pointer"><GitHubIcon style={{fontSize:"35px"}}/></a>
                        </div>
                    </div>
                    <div className="md:order-2 grid justify-center md:justify-start">
                        <div className="w-72 h-72  flex items-center">
                            <img className="w-72 h-72 animate-border-radius" src={profile} alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid md:flex justify-center lg:justify-start lg:px-16 pt-16 gap-8 items-center text-center">
                    <p className="text-[#2d2e32] text-lg font-semibold">Tech Stack <span className="ml-5">|</span></p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {Techstack.map((tech,index)=>(
                            <a  key={index} target='_blank' href={tech.href}><div onClick={()=>{redirect(tech.href)}}  className="z-20 shadow-lg w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer group">
                                <img  src={tech.name} alt={tech.name} className="w-14 h-14"/>
                            </div></a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Hero;
