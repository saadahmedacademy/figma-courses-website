import Image from "next/image";
import React from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <header
        style={{ height: "var(--navbar-height)" }}
        className="text-black body-font bg-[#F7F7F7] body-font lg:h-[6rem] md:h-[8rem] h-[5rem] border-b border-gray-500 fixed z-50 w-full"
      >
        <div className="container mx-auto flex lg:flex lg:flex-row md:flex-col md:gap-1 justify-between md:justify-evenly p-5 items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <Image alt="logo" src={"/logo.svg"} width="150" height="150" />
          </a>

          <div className=" hidden md:flex justify-between ld:gap-10 md:gap-5 gap-2 bg-white rounded-lg px-4 py-1 items-center none ">
            <nav className="md:mx-auto flex flex-wrap items-center gap-1 md:gap-4 lg:gap-8 text-base justify-center">
              <a
                href="/"
                className="hover:pb-2 hover:border-b-2 hover:border-blue-600"
              >
                Home
              </a>
              <a
                href="#courses"
                className="hover:pb-2 hover:border-b-2 hover:border-blue-600"
              >
                Couses
              </a>
              <a
                href="#services"
                className="hover:pb-2 hover:border-b-2 hover:border-blue-600"
              >
                Services
              </a>
              <a
                href="#achievement"
                className="hover:pb-2 hover:border-b-2 hover:border-blue-600"
              >
                Achievement
              </a>
              <a
                href="#aboutus"
                className="hover:pb-2 hover:border-b-2 hover:border-blue-600"
              >
                About Us
              </a>
              <a
                href="#ourteam"
                className="hover:pb-2 hover:border-b-2 hover:border-blue-600"
              >
                Testimonial
              </a>
            </nav>
            <div className="inline-flex items-center lg:gap-2 gap-1">
              <button className="inline-flex items-center  border rounded-lg py-2 lg:px-5 px-4 border-black hover:bg-black hover:text-white text-base mt-4 md:mt-0">
                Login
              </button>
              <button className="inline-flex items-center bg-black text-white border-white rounded-lg py-2 lg:px-5 px-4  hover:bg-white hover:text-black text-base mt-4 md:mt-0">
                Sign Up
              </button>
            </div>
          </div>

          <span className="my-auto md:hidden inline-flex">
            <IoMenu className="text-4xl" />
          </span>
        </div>
      </header>
    </>
  );
};