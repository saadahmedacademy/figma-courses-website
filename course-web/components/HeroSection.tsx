"use client";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="text-black bg-white body-font lg:pt-[6rem] pt-32">
        <div className="w-full flex flex-col md:flex-row items-center pb-1 justify-center">
          {/* Text Section */}
          <section className="md:w-1/2 w-full flex justify-center md:pb-0 pb-10 px-4">
          <div className="flex flex-col  items-start text-left">
            <h1 className="sm:text-4xl text-3xl mb-4 font-bold">
              Learn new skills{" "}
              <br className="hidden lg:inline-block" />
              online with ease
            </h1>
            <p className="mb-8 leading-relaxed text-gray-900">
              Discover a wide range of courses covering a variety of{" "}
              <br className="hidden lg:inline-block" />
              subjects, taught by expert instructors.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <button className="inline-flex items-center border rounded-lg py-2 px-3 bg-black border-white hover:bg-white text-white hover:border-black hover:text-black text-base mt-4 md:mt-0">
                Explore course
              </button>
              <button className="inline-flex items-center border-black border rounded-lg py-2 px-3 hover:bg-black hover:text-white hover:border-black text-base mt-4 md:mt-0">
                Start learning now
              </button>
            </div>
          </div>
          </section>
          {/* Image Section */}
          <div className=" w-full md:w-1/2 border-e-red-700 border">
            <Image
              className="w-full max-w-full"
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
