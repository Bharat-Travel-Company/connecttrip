import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full bg-[#E2DFD0] flex flex-col items-center justify-center gap-5">
      <div className='flex justify-center items-center pt-10'>
        <h1 className='hidden md:block justify-center items-center'>__________________________________________________________</h1>
        <img src={logo} alt="" />       
        <h1 className='hidden md:block justify-center items-center'>__________________________________________________________</h1>

      </div>
      <div className='flex justify-center items-center gap-5 '>
        <a ><FaFacebookF className='text-2xl'/></a>
        <a href="https://www.instagram.com/cm_00006?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className='text-2xl'/></a>
        <a><FaTwitter className='text-2xl'/></a>
        <a href='https://www.linkedin.com/in/ctipvtltd/'><FaLinkedinIn className='text-2xl'/></a>
        <a><FaYoutube className='text-2xl'/></a>     
      </div>
      <strong className="mx-auto text-[#F97300]">
      <Link to="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link>
      <Link to="/terms-and-conditions" style={styles.footerLink}>Terms & Conditions</Link>
      </strong>
      <strong className="mx-auto text-[#F97300] mb-5">
        © 2024 Copyright: <a href="https://himachaltourpackages.shop">www.himachaltourpackages.shop</a>
      </strong>
    </footer>
  );
};

const styles = {
  footerLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '5px'
  }
};

export default Footer;


