import logo from "../assets/Logo1.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
   <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-40" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dev-vicky-29j/"><FaLinkedin/></a>
       <a href="https://github.com/dev-vicky-29"><FaGithub/></a>
       <a href="https://www.instagram.com/dev_vicky.29/"><FaInstagram/></a>
       <a href="https://twitter.com/Dev_Vicky_29"><FaSquareXTwitter/></a>
    </div>
   </nav>
);
};

export default Navbar;