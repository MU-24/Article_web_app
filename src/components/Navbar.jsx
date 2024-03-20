import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-slate-900 z-50">
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        <div className=" lg:text-4xl font-bold text-2xl md:text-2xl cursor-pointer text-white">
          <span className="text-orange-600">UK</span> Articles
        </div>
        <div
          className="text-3xl text-white md:hidden cursor-pointer"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center fixed md:static bg-slate-900  text-white md:z-auto z-[-1] md:w-auto h-full transition-transform duration-500 ease-in-out ${
            nav ? "opacity-100 translate-x-0" : "-translate-x-full opacity-0 "
          } left-0 top-16 md:translate-x-0 opacity-85 md:opacity-100 md:static md:bg-transparent md:z-auto z-50 w-2/3 `}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7 ml-6">
            <Link
              to="/"
              className=" hover:text-orange-600 duration-500"
              onClick={() => setNav(false)}
            >
              Home
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ml-6">
            <Link
              to="/articles"
              className=" hover:text-orange-600 duration-500"
              onClick={() => setNav(false)}
            >
              Articles
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ml-6">
            <Link
              to="/about"
              className=" hover:text-orange-600 duration-500"
              onClick={() => setNav(false)}
            >
              About
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ml-6">
            <Link
              to="/contact"
              className=" hover:text-orange-600 duration-500"
              onClick={() => setNav(false)}
            >
              Contact
            </Link>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7 ml-6">
            <Link
              to="/login"
              className=" hover:text-orange-600 duration-500"
              onClick={() => setNav(false)}
            >
              Login
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ml-6">
            <Link
              to="/registration"
              className=" hover:text-orange-600 duration-500"
              onClick={() => setNav(false)}
            >
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
