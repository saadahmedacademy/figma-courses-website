import Image from "next/image";
import React from "react";


export const CourseCatogories = () => {
  return (
    <>
      <div className="md:container mx-auto flex flex-col w-full p-3 ">
        <section className="flex flex-col gap-2 w-full mx-auto">
          <h1 className="font-bold font-[Roboto] text-black">Explore Courses By Category</h1>
          <p className="text-gray-800">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </section>

        <section>
        <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg flex">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
           <Image src={""} width={1} height={1} alt="catogory" 
           className=""/>
          </div>
          <div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
          </div>
        </div>
      </div>
        </section>
      </div>
    </>
  );
};
