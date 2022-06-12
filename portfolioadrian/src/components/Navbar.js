import React from "react";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [hambur, setHambur] = useState(false);
  const changeHambur = () => {
    setHambur(!hambur);
  };
  return (
    <header className="py-6 border-b border-white">
      <div className="container flex justify-between justify-center mx-auto px-8 md:px-14 lg:px-18 w-full">
        <div className="text-lg">Adrian Fredriksen</div>

        {/* menu */}
        <div className="hidden md:flex space-x-12 ">
          <a href="https://twitter.com/HunterrNo">Twitter</a>
          <a href="https://github.com/AdrianFred">Github</a>
          <a href="#">
            <Link to="experience" smooth={true} duration={500}>
              My Experience
            </Link>
          </a>
        </div>

        {/* hamburger */}
        <div onClick={changeHambur} className="md:hidden z-20 text-2xl">
          {!hambur ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <div
          className={!hambur ? "hidden" : "absolute top-0 left-0 h-full w-full bg-body flex flex-col justify-center items-center space-y-6 text-xl"}
        >
          <a href="https://twitter.com/HunterrNo">Twitter</a>
          <a href="https://github.com/AdrianFred">Github</a>
          <a href="#">
            <Link to="experience" smooth={true} duration={500}>
              My Experience
            </Link>
          </a>
        </div>
      </div>
    </header>
  );
}
