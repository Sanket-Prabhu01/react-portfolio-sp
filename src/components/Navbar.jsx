import logo from "../assets/KevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return(  
    <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sanket-prabhu-67ba70237/" target="_blank" rel="noopener noreferrer">
           <FaLinkedin/> </a>
           <a href="https://github.com/Sanket-Prabhu01" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sanketprabhu_01?igsh=Mnc4ZWV3MWpiZ3E3" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        {/* <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer"> */}
          <FaSquareXTwitter />
        {/* </a>   */}
        </div>
  </nav>
  );
  };

  export default Navbar