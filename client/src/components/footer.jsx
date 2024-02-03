import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer(){
    return(
        <>
            <div className="bg-[#2d2e32] w-full py-12">
                <div className="grid grid-cols-3 mx-auto px-12">
                    <p className="col-span-2 text-base md:text-xl text-center md:text-start font-bold font-sans text-white">Copyright © 2023. All rights are reserved</p>
                    <div className="flex gap-4 justify-center">
                        <a target='_blank' href="https://www.linkedin.com/in/sajadh-s-916964215/" className="text-white transform hover:-translate-x-2 hover:-translate-y-2 transition  duration-300 cursor-pointer"><LinkedInIcon style={{fontSize:'40px'}}/></a>
                        <a target='_blank' href="https://github.com/SAJUSAJADH" className="text-white transform hover:-translate-x-2 hover:-translate-y-2 transition  duration-300 cursor-pointer"><GitHubIcon style={{fontSize:"35px"}}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}