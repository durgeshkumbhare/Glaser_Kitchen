import React from "react";
import Navbar from "../components/Navbar";
import { FaAddressCard } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="h-[100vh] bg-gray-200 ">
      <Navbar />
      <div className=" p-4 grid grid-cols-2 gap-8">
        <div>
          {" "}
          <h1 className="text-3xl text-gray-800 font-serif font-semibold">
            Contact Us
          </h1>
          <p className="mt-4">
            <FaAddressCard className="inline mr-4  text-black" />
            <span className="text-gray-900 font-serif font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              laboriosam doloremque aliquid placeat voluptates.
            </span>
          </p>
          <p>
           
            <span className="flex flex-col mt-4 gap-2 font-serif font-medium">
              <span className="text-black">Email : test@gmail.com</span>
              <span className="text-black">Customer : 1800-4000-9000</span>
              <span className="text-black">Mobile No. : 9999444422</span>
            </span>
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <label className="text-gray-800  font-semibold">Name</label>
          <input
            type="text"
            className="border border-solid border-black bg-gray-200 rounded-sm w-96 text-black "
          />
          <label className="text-gray-800  font-semibold">Email</label>
          <input
            type="text"
            className="border border-solid border-black bg-gray-200 rounded-sm w-96 text-black "
          />
          <label className="text-gray-800  font-semibold">Mobile Number</label>
          <input
            type="text"
            className="border border-solid border-black bg-gray-200 rounded-sm w-96 text-black "
          />
          <label className="text-gray-800  font-semibold">Address</label>
          <input
            type="text"
            className="border border-solid border-black bg-gray-200 rounded-sm w-96 text-black "
          />
          <label className="text-gray-800  font-semibold">Message</label>
          <textarea className="w-96  bg-gray-200 border border-solid border-black rounded-sm w-96  h-40" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
