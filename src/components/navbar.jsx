import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaSuitcaseRolling,
  FaPhone,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleEmail = () => {
    const email = "Tourplnr@gmail.com";
    const subject = "Enquiry for Tour Planner Package";
    const body = "Hello,\nEnquiry for Tour Planner";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  const handleCall = () => {
    window.location.href = "tel:+91-931-995-9557";
  };
  return (
    <nav className="w-full ">
      <div className="w-full h-9 flex items-center justify-between lg:px-4 px-2 shadow-sm">
        <div className="flex h-full items-center justify-start flex-grow">
          <Link to="/" className="pl-1 text-[#1d242f] font-semibold">
            
          </Link>
        </div>
        <div className="flex h-full items-center justify-center flex-grow">
          <ul className="flex justify-center w-full">
            <li className="text-[#13253F] font-medium text-center w-full">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="flex h-full items-center justify-end flex-grow">
          <div className="flex items-center gap-x-1">
            <FaPhone className="text-[#13253F]" />
            <button
              onClick={handleCall}
              className="text-[#13253F] font-semibold"
            >
              +91-9319959557
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
