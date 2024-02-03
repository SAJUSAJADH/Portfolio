import laptop from "../assets/computer.jpg";
import web from "../assets/webdev.svg";

export default function About() {
  const aboutme =
    "👋 Hi there! I'm Sajadh S, a passionate blockchain developer with a strong focus on building dApps using cutting-edge technologies. With a background in Solidity and a knack for full-stack development, I harness the power of modern web development frameworks like Next.js, React, and Vite to build intuitive user interfaces for my blockchain applications. In the backend realm, I'm well-versed in Node.js, Express and MongoDB for database, enabling me to create scalable and high-performance server-side components that complement the frontend. When it comes to crafting beautiful and responsive designs, I turn to Tailwind CSS, a utility-first CSS framework that allows me to create stunning UIs efficiently. JavaScript is my bread and butter; it's the language that ties it all together. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding dApps.";
  return (
    <>
      <div id="about" className="bg-white w-full realative py-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="relative grid justify-center md:justify-end items-center px-3 md:px-0">
              <img className="rounded-lg w-96 md:w-3/4" src={laptop} alt="" />
              <img
                className="hidden md:block spin absolute bottom-4 right-16 w-44 h-44 bg-white overflow-hidden rounded-full"
                src={web}
                alt=""
              />
            </div>
            <div className="container mx-auto grid justify-start md:w-3/4 px-3 md:px-0">
              <p className="text-blue-500 text-lg font-bold text-center md:text-start font-sans py-2">
                ABOUT ME
              </p>
              <p className="text-2xl font-bold text-center md:text-start font-sans pb-2">
                A dedicated Blockchain Developer <br />
                based in Kerala, India{" "}
              </p>
              <p className="text-base text-[#767676] text-justify">{aboutme}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
