"use client";
import Image from "next/image";
import React from "react";
import showCourses from "@/jsonData/coursedata.json";
import { IoIosStarOutline } from "react-icons/io";

export const Courses = () => {
  return (
    <>
      <div className=" mx-auto text-black flex flex-col w-full px-2 md:px-8 py-7 min-h-screen">
        <section className="flex flex-col gap-3 mx-auto py-11">
          <div className="flex flex-col gap-5 w-full">
          <h1 className="font-bold lg:text-4xl md:text-3xl text-xl font-sans text-black text-center">
          Courses
          </h1>
          <p className="text-gray-700 text-center">
          Your Ultimate Guide to learning
          </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p className="text-gray-700 text-xl">Popular</p>
            <p className="text-gray-700 text-xl">Recommended</p>
            <p className="text-gray-700 text-xl">Best Price</p>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 ">
          {showCourses?.length ? (
            showCourses.map((items, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center rounded-sm bg-slate-100">
                <div className="w-full">
                  <Image
                    src={`${items.icon}`}
                    width={1}
                    height={1}
                    className="w-full h-full"
                    alt="courseImage"
                  />
                </div>
                <div className="flex px-4 py-3 justify-between items-center w-full">
                  <span className="font-semibold">{items.level}</span>
                  <div className="flex items-center justify-center w-4 gap-2 pr-5 ">
                    <span>
                      {" "}
                      <IoIosStarOutline className="text-gray-600 text-xl" />
                    </span>{" "}
                    <p className="font-semibold">5.0</p>
                  </div>
                </div>
                <div className="flex flex-col p-3 justify-center items-start gap-2">
                  <h1 className="text-xl font-bold">{items.title}</h1>
                  <p className="leading-relaxed text-base col-span-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est, Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
                <div className=" w-full p-4 flex gap-5 items-center justify-start">
                  <button className=" hover:-translate-y-1 transition duration-[0.5s]  inline-flex items-center border-black border rounded-lg py-2 px-5 hover:bg-black hover:text-white hover:border-black text-base ">
                    Enroll now
                  </button>
                  <span className="">$400</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No categories available.
            </p>
          )}
        </section>
        <div className="mx-auto my-14">
          <button className=" hover:-translate-y-1 transition duration-[0.5s]  inline-flex items-center border-black border rounded-lg py-2 px-5 hover:bg-black hover:text-white hover:border-black text-base mt-4 md:mt-0">
            View all courses
          </button>
        </div>
      </div>
      );
    </>
  );
};
