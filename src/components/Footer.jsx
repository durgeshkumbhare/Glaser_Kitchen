import React from "react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className=" bg-gray-800 text-white capitalize tracking-wider p-4 grid md:grid-cols-3 gap-4">
      <div>
        <h1 className="flex flex-col text-3xl font-serif font-bold">
          Glaser <span className="text-gray-400">Kitchen</span>
          <span className="text-gray-400"> Sinks</span>
        </h1>
        <p className="mt-5 text-lg font-serif text-gray-400">
          Company Address :
          <span className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            distinctio fugit.
          </span>
        </p>
      </div>
      <div>
        <h1 className="text-lg font-serif mb-4">Contact Us</h1>
        <p className="font-serif hover:text-gray-400">email@gmail.com</p>
        <p className="font-serif hover:text-gray-400">9999333322</p>
      </div>
      <div>
        <h1 className="text-lg font-serif mb-4 ">Company</h1>
        <a href="/" className="block font-serif hover:text-gray-400">About us</a>
        <a href="/" className="font-serif hover:text-gray-400">About The founder</a>
      </div>
    </div>
  );
};

export default Footer;
