import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white border-b border-b-gray-800 fixed top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-5 md:px-10">
        <h1 className="font-bold font-tiltPrism text-2xl md:text-3xl">
          <Link to="/">FAKE SHOP</Link>
        </h1>
        <div className="flex gap-10">
          <ul className="items-center gap-6 flex">
            <Link to={"/"}>Home</Link>
          </ul>
          <div className="flex gap-4 md:gap-8 items-center justify-center">
            <Link to={"/cart"} className="relative cursor-pointer">
              <IoCart className="text-2xl md:text-3xl text-black" />
              <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-orange-900 text-white w-4 md:w-5 h-4 md:h-5 rounded-full flex items-center justify-center text-xs">
                {10}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
