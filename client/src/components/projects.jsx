import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../utils/content";
import { fadeIn } from "../utils/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Projects() {
  return (
    <>
      <div id="projects" className="relative py-32 w-full bg-slate-100">
        <div className="container mx-auto">
          <div className="flex flex-col text-center justify-center items-center py-4">
            <p className="font-bold text-blue-500 font-sans py-2">PORTFOLIO</p>
            <h2 className="font-bold font-sans text-4xl pb-8">
              Each project is a unique piece of development 🧩
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12 px-3 lg:px-16 mx-auto  justify-center items-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                className="flex justify-center"
              >
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className="bg-[#ffff] bg-opacity-5 p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
                >
                  <div
                    className="relative w-full h-[230px]"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <img
                      src={project.image}
                      alt="project_image"
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
                  </div>

                  <div className="mt-5 grid gap-2">
                    <h3 className="text-lg font-bold text-[24px]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base font-light text-slate-900">
                      {project.desc}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-lg font-bold"
                      >
                        <GitHubIcon className="hover:text-yellow-300" />
                      </a>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
