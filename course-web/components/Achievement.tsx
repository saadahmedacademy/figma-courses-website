"use client";
import React from "react";

export const Achievement = () => {
  interface AchievementDataType {
    id: string;
    count: string;
    itemsName: string;
  }

  const achievement : AchievementDataType[] = [
    {
      id: "1",
      count: "+200",
      itemsName: "Courses",
    },
    {
      id: "2",
      count: "+50k",
      itemsName: "Mentors",
    },
    {
      id: "3",
      count: "+370",
      itemsName: "Students",
    },
    {
      id: "4",
      count: "+100",
      itemsName: "Recognition",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col w-full p-3 mt-5 h-[488px]" id="achievement">
      {/* Section Header */}
      <section className="flex flex-col gap-3 mx-auto py-11">
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl font-sans text-black text-center">
          Our Achievements
        </h1>
        <p className="text-gray-800 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </section>

      {/* Achievements Section */}
      <section className="w-full flex flex-wrap justify-evenly items-center gap-6 p-3">
        {achievement.map((data) => (
          <div
            className="flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:scale-105"
            key={data.id}
          >
            <h1 className="text-3xl font-bold">{data.count}</h1>
            <p className="text-xl">{data.itemsName}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
