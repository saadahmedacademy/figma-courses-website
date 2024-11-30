"use client";
import Image from "next/image";
import React from "react";

export const CompaniesSection = () => {
  return (
    <>
      <div className="w-full h-[228px] flex md:justify-center md:flex-row items-center flex-col bg-[#F7F7F7] text-black">
        <div className="flex justify-center my-auto w-[40%]">
          <h1 className="sm:text-4xl text-3xl xl:pl-0 pl-3 font-bold font-[Roboto] text-start ">
            Trusted by 2000+ companies <br className="hidden lg:inline-block" />
            worldwide.
          </h1>
        </div>
        <div
          className="flex md:pl-0 pl-10 md:w-[60%] justify-center md:gap-2 overflow-x-auto items-center"
          id="companyImages"
        >
          <Image
            className=""
            src="/companies/com1.svg"
            alt="companyLogo1"
            width={100}
            height={110}
          />
          <Image
            className=""
            src="/companies/com2.svg"
            alt="companyLogo2"
            width={100}
            height={110}
          />
          <Image
            className=""
            src="/companies/com3.svg"
            alt="companyLogo3"
            width={100}
            height={110}
          />
          <Image
            className=""
            src="/companies/com4.svg"
            alt="companyLogo4"
            width={100}
            height={110}
          />
          <Image
            className=""
            src="/companies/com5.svg"
            alt="companyLogo5"
            width={100}
            height={110}
          />
          <Image
            className=""
            src="/companies/com6.svg"
            alt="companyLogo6"
            width={100}
            height={110}
          />
        </div>
      </div>
    </>
  );
};
