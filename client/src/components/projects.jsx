import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import bookingapp from '../assets/bookingapp3.jpeg'
import carrental from '../assets/carrental2.jpeg'
import chainpay from '../assets/chainpay.png'


export default function Projects(){

    const projects = [
        {image: chainpay, title: "ChainPay 💰", desc: "ChainPay enables users to send ERC-20 tokens to anyone globally, promoting a borderless and accessible financial ecosystem.", tech: ["NEXTjs", "ETHEREUM"], github: "https://github.com/SAJUSAJADH/Nextjs-Blockchain-Payment-App", demo: "https://web3chainpay.vercel.app/"},
        {image: carrental, title: "CAR RENTAL 🚗", desc: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for reserving cars.", tech: ["VITE", "MERN"], github: "https://github.com/SAJUSAJADH/CarRentals", demo: "https://bookcars.vercel.app/"},
        {image: bookingapp, title: "HOTEL BOOKING 📅", desc: "BookMyStay is a dynamic and user-friendly platform designed to revolutionize the way people book accommodations in hotels and resorts.", tech: ["VITE", "MERN"], github: "https://github.com/SAJUSAJADH/BookMyStay", demo: "https://bookmystays.vercel.app/"}
    ]

    return(
        <>
            <div id="projects" className="relative py-32 w-full bg-slate-100">
                <div className="container mx-auto">
                    <div className="flex flex-col text-center justify-center items-center py-4">
                        <p className="font-bold text-blue-500 font-sans py-2">PORTFOLIO</p>
                        <h2 className="font-bold font-sans text-4xl pb-8">Each project is a unique piece of development 🧩</h2>
                    </div>
                    <div className="flex flex-col gap-12 px-1 md:px-0 mx-auto md:w-3/5 justify-center items-center">
                        {projects.map((project,index)=>(
                            <div key={index} className="py-8 rounded-xl bg-white z-30 shadow-2xl">
                                <div className='grid lg:grid-cols-2 gap-4'>
                                    <div className={index % 2 === 0 ? 'px-4' : 'px-4 md:order-last'}>
                                        <a target='_blank' href={project.demo}><img src={project.image} alt="" className="rounded-xl z-40 shadow-xl h-full"/></a>
                                    </div>
                                    <div className="px-4 py-2 flex flex-col gap-4 text-center">
                                        <p className="text-lg font-bold text-[#2d2e32]">{project.title}</p>
                                        <p className="text-lg text-[#767676]">{project.desc}</p>
                                        <div className="flex justify-center gap-2 py-2">
                                            <button className='bg-white text-lg text-[#2d2e32] font-bold font-sans z-40 shadow-xl rounded px-6 py-2'>{project.tech[0]}</button>
                                            <button className='bg-white text-lg text-[#2d2e32] font-bold font-sans z-40 shadow-xl rounded px-6 py-2'>{project.tech[1]}</button>
                                        </div>
                                        <div className="flex justify-center gap-4 pt-4">
                                            <a target='_blank' href={project.github} className="text-[#2d2e32] font-bold font-sans text-lg hover:text-blue-500">Code <GitHubIcon style={{fontSize:"35px"}}/></a>
                                            <a target='_blank' href={project.demo} className="text-[#2d2e32] font-bold font-sans text-lg hover:text-blue-500">Live Demo <LaunchIcon style={{fontSize:"35px"}}/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
