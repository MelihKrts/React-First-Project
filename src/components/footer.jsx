import logo from "../assets/images/logo.png"
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaHouseChimney, FaPhoneFlip, } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-400">

      <div className="container mx-auto flex justify-between lg:flex-row flex-col md:flex-row flex-wrap items-center">

        <div className="lg:w-1/6 md:w-1/2  flex items-center w-full justify-center"><img src={logo} alt="Logo" title="Logo"></img></div>

        <div className="lg:w-1/4 md:w-1/2 w-full text-white pl-2">

            <h1 className="text-center text-xl my-2 font-bold text-black">About</h1>
            <p className="text-justify mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo quo nesciunt ipsum, a id quia eveniet blanditiis labore laborum eligendi possimus maxime sequi deleniti tempora omnis alias. Sed, dignissimos.</p>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full">
            <h1 className="text-center text-xl my-2 font-bold text-black">Follow Us</h1>

            <div className="flex flex-row justify-between items-center mb-2">
            
            <FaXTwitter className="text-white text-3xl w-1/4"/>
            <FaInstagram className="text-white text-3xl w-1/4"/>
            <FaYoutube className="text-white text-3xl w-1/4"/>
            <FaLinkedinIn className="text-white text-3xl w-1/4"/>
            </div>

        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full sm:pl-4">
            <h1 className="text-center text-xl my-2 font-bold text-black">Addres</h1>

            <div className="flex flex-row justify-between items-center mb-2 flex-wrap">
            
            <div className="w-full flex flex-row items-center text-white">
                <FaHouseChimney/> <span className="mx-2 text-lg">Francisco, CA 94103</span>
            </div>

            <div className="w-full flex flex-row items-center text-white">
                <FaPhoneFlip/> <span className="mx-2 text-lg">+ 123 456 789</span>
            </div>

            <div className="w-full flex flex-row items-center text-white">
                <MdMail/> <span className="mx-2 text-lg">example@example.com</span>
            </div>

            

            </div>

        </div>

      </div>
    </footer>
  );
}
