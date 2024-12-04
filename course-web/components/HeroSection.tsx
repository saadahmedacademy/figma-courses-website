"use client";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="text-black bg-white body-font lg:pt-[6rem] pt-32">
        <div className="container flex ml-auto justify-around md:pl-24 pb-1 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 pt-6 px-4 flex-col md:items-start  md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 className=" sm:text-4xl text-3xl mb-4 font-bold text-start">
              Learn new skills {""}
              <br className="hidden lg:inline-block" />
              online with ease
            </h1>
            <p className="mb-8 leading-relaxed text-gray-900 text-start ">
              Discover a wide range of courses covering a variety of{" "}
              <br className="hidden lg:inline-block" />
              subjects,taught by expert instructors.
            </p>
            <div className="flex justify-start w-full gap-3 ">
              <button className="inline-flex items-center border rounded-lg py-2 px-3 bg-black border-white hover:bg-white text-white hover:border-black  hover:text-black text-base mt-4 md:mt-0">
                Explore course
              </button>
              <button className="inline-flex items-center border-black border rounded-lg py-2 px-3 hover:bg-black hover:text-white hover:border-black text-base mt-4 md:mt-0">
                Start learning now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2">
            <Image
              className=" w-full max-w-full "
              alt="hero"
              src={"/mainImage.svg"}
              width={"0"}
              height={"0"}
            />
          </div>
        </div>
      </section>
    </>
  );
};
