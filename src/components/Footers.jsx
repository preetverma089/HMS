import React from "react";
import logo from "../assets/dj.png";
const Footers = () => {
  return (
    <div className="">
      <div className="bg-black h-[400px] flex justify-between items-center px-[130px]">
        {/* Image Div */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-[240px] object-cover pt-[10px]"
          />
        </div>
        <div>
          <h1
            className=" text-[16px] text-white font-bold
          "
          >
            COMPANY
          </h1>
          <p className="text-gray-600">
            {" "}
            <a href="" className="hover:text-blue-500 transition">
              About
            </a>
          </p>
          <p className="text-gray-600">
            {" "}
            <a href="" className="hover:text-blue-500 transition">
              Doctor
            </a>
          </p>
          <p className="text-gray-600">
            {" "}
            <a href="" className="hover:text-blue-500 transition">
              Service
            </a>
          </p>
          <p className="text-gray-600">
            {" "}
            <a href="" className="hover:text-blue-500 transition">
              Contact
            </a>
          </p>
        </div>
        <div>
          <h1
            className=" text-[16px] text-white font-bold
          "
          >
            QUICK LINKS
          </h1>
          <p className="text-gray-600">
            <a href="" className="hover:text-blue-500 transition">
              Login
            </a>{" "}
          </p>
          <p className="text-gray-600">
            <a href="" className="hover:text-blue-500 transition">
              SignUp
            </a>
          </p>
          <p className="text-gray-600">
            <a href="" className="hover:text-blue-500 transition">
              Forgot
            </a>
          </p>
          <p className="text-gray-600">
            <a href="" className="hover:text-blue-500 transition">
              FAQ
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#212529] flex justify-between items-center px-[60px] h-[50px]">
        <div>
          <p className="text-gray-300 text-[12px]">
            Copyright © Your Website 2025
          </p>
        </div>
        <div>
          <ul className="flex justify-center items-center text-gray-300 gap-2 text-[12px]">
            <li>
              <a href="" className="hover:text-blue-500 transition">
                Privacy
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500 transition">
                Terms
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footers;
