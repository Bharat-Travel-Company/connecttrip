import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  const handleCall = () => {
    window.location.href = "tel:+91-931-995-9557";
  };
  return (
    <nav className="w-full ">
      <div className="w-full flex items-center justify-between lg:px-4 px-2 shadow-sm bg-[#F7F7F7] py-1">
        <div className="flex h-full items-center justify-start flex-grow">
          <Link to="/" className="pl-1 font-semibold">
            <img src={logo} alt="" className="w-44 h-9" />
          </Link>
        </div>
        <div className="flex h-full items-center justify-center flex-grow">
          <ul className="flex justify-center gap-x-4">
            <li className="text-[#13253F] font-medium text-center w-full">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#13253F] font-medium text-center w-full">
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="flex h-full items-center justify-end flex-grow">
          <div className="flex items-center gap-x-1 bg-[#F37002] px-4 rounded-2xl py-1">
            <FaPhone className="text-white" />
            <button
              onClick={handleCall}
              className="text-white font-semibold uppercase"
            >
              Talk to An expert
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
