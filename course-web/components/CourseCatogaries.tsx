import Image from "next/image";
import React from "react";
import ourCategories from "@/jsonData/categories.json";

export const CourseCategories = () => {
  return (
    <div className="container mx-auto flex flex-col w-full p-3">
      <section className="flex flex-col gap-3 mx-auto py-11">
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl font-sans text-black text-start">
          Explore Courses By Category
        </h1>
        <p className="text-gray-800 text-start">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {ourCategories?.length ? (
          ourCategories.map((category, index) => (
            <div
              key={index}
              className="w-full h-[150px] border border-gray-200 p-6 rounded-md bg-slate-200 flex justify-center items-center gap-2"
            >
              <div className="w-[40%] h-[130px] flex items-center justify-center bg-white">
                <Image
                  src={category.icon}
                  width={45}
                  height={45}
                  alt={`${category.title} icon`}
                />
              </div>
              <div className="w-[60%] p-3">
                <h2 className="text-xl font-bold">{category.title}</h2>
                <p className="leading-relaxed text-base">{category.heading}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No categories available.</p>
        )}
      </section>
    </div>
  );
};
