import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const { setPageId } = useGlobalContext();
  return (
    <nav className="h-20 flex items-center justify-center bg-zinc-800 text-white ">
      <div className="w-[90vw] max-w-[1120px] flex justify-between items-center px-8">
        <img src={logo} className="h-14 hover:scale-105 transition-all" />
        <button className="w-8 h-8 rounded transition-all cursor-pointer hover:scale-110 md:hidden">
          <FaBars />
        </button>
      </div>
      <div className="hidden md:flex pr-8 text-xl font-serif ">
        <Link
          to="/"
          className="pr-4 font-semibold text-gray-200  hover:scale-100 hover:text-gray-400 tracking-wide"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="pr-4 font-semibold text-gray-200  hover:scale-100 hover:text-gray-400 tracking-wide"
        >
          About
        </Link>
        <Link
          to="/products"
          className="pr-4 font-semibold text-gray-200  hover:scale-100 hover:text-gray-400 tracking-wide"
          onMouseEnter={() => setPageId(1)}
        >
          Products
        </Link>
        <Link
          to="/contact"
          className="pr-4 font-semibold text-gray-200  hover:scale-100 hover:text-gray-400 tracking-wide"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
