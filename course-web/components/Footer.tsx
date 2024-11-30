"use client";
import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <footer className=" text-black body-font">
        <div className="container px-5 py-24 border-b-2 border-black mx-auto flex md:items-center lg:items-start md:flex-row-reverse md:flex-nowrap flex-wrap flex-col-reverse">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:pb-0 px-8 pb-5">
              <Image alt="logo" src={"/logo.svg"} width="150" height="150" />
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col gap-3 text-black">
              <h2 className="font-sans font-bold text-black  text-sm mb-3">
                Courses
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-5">
                <li>Business</li>
                <li>Developmen</li>
                <li>Technology</li>
                <li>Design</li>
                <li>Programming</li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col gap-3 text-black">
              <h2 className="font-sans font-bold text-black  text-sm mb-3">
              Resources
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-5">
                <li>Career</li>
                <li>Resume</li>
                <li>Learning</li>
                <li>Interview Preparation</li>
                <li>Jobs</li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col gap-3 text-black">
              <h2 className="font-sans font-bold text-black  text-sm mb-3">
                About Us
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-5">
                <li>Contact</li>
                <li>Help/Support</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Partners</li>
              </nav>
            </div>
        </div>
        </div>
      
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center flex flex-wrap gap-3 md:pb-0 md:px-0 pb-4 px-6 mx-auto sm:text-left">
            <span className="border-b border-black "> 2023 Ddsgnr. All right reserved.</span> 
           <span className="border-b border-black ">  Privacy Policy </span> 
              <span className="border-b border-black ">
              Terms of Service
              </span>
            <span className="border-b border-black "> Cookies Settings</span>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
