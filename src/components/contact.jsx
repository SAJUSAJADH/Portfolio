import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <>
      <div id="contact" className="relative w-full bg-white py-32">
        <div className="container mx-auto">
          <div className="flex py-2 justify-center">
            <p className="text-xl font-bold text-blue-500 font-sans">CONTACT</p>
          </div>
          <div className="flex py-2 justify-center">
            <p className="text-2xl font-bold text-[#2d2e32] font-sans">
              Feel free to contact! 👇
            </p>
          </div>
          <div className="grid lg:grid-cols-2 mx-auto gap-16 pt-12 xl:px-72">
            <div className="flex justify-center gap-4 ">
              <div className="z-20 drop-shadow-2xl w-20 h-20 rounded-full bg-[#fff] flex items-center justify-center cursor-pointer">
                <p className="text-blue-500">
                  <MapIcon style={{ fontSize: "35px" }} />
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold font-sans text-xl">Location</p>
                <p className="font-sans text-xl font-semibold text-[#2d2e32]">
                  Located in Kerala, India
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 ">
              <div className="z-20 drop-shadow-2xl w-20 h-20 rounded-full bg-[#fff] flex items-center justify-center cursor-pointer">
                <p className="text-blue-500">
                  <EmailIcon style={{ fontSize: "35px" }} />
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold font-sans text-xl">Mail</p>
                <a
                  target="_blank"
                  href="mailto:sajadh2001s@gmail.com"
                  className="font-sans text-xl font-semibold text-[#2d2e32] hover:text-blue-500"
                >
                  sajadh2001s@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
