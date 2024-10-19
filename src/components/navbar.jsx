import { FaPhone } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const handleCall = () => {
    //to open in same tab
    // window.location.href = "tel:+91-963-010-7798";
    window.open("tel:+91-963-010-7798", "_blank");
  };
  const routes = [{ label: "Home", path: "/" }];
  return (
    <nav className="w-full ">
      <div className="flex absolute z-40 w-full lg:px-24 md:px-4 px-2  py-2 bg-gradient-to-b from-gray-50/10  to-transparent backdrop-blur-lg">
        <div className="flex h-full items-center justify-start flex-grow">
          <Link to="/" className="pl-1 font-semibold">
            <img src={logo} alt="" className="md:w-44 w-28  h-9" />
          </Link>
        </div>
        <div className="flex h-full items-center justify-center flex-grow">
          <ul className="flex justify-center gap-x-4">
            {routes.map((route, index) => (
              <li key={index}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "text-[#F37002] before:content-['•'] before:mr-1 before:text-[#F37002]"
                        : "text-gray-100"
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full items-center justify-end flex-grow">
          <div className="flex items-center gap-x-1 bg-[#F37002] md:px-4 px-2.5 rounded-2xl md:py-1 py-2 md:text-base  text-[0.65rem]">
            <FaPhone className="text-[#F7F7F7]" />
            <button
              onClick={handleCall}
              className="text-[#F7F7F7] font-semibold uppercase"
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
