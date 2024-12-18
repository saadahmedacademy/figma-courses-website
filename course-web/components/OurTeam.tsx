import React, { useState } from "react";
import showOurTeam from "@/jsonData/ourTeam.json"
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export  const OurTeam = () => {
    return (
    <>
    <div className=" h-[895px] w-full mx-auto flex flex-col px-3 pb-32 bg-[#F7F7F7]" id="ourteam">
      {/* Section Header */}
      <section className="flex flex-col gap-3 mx-auto py-11">
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl font-sans text-black text-center">
          Our Team
        </h1>
        <p className="text-gray-800 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </section>

      {/* Achievements Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 p-3">
        {showOurTeam.map((data) => (
          <div
            className="flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:scale-105"
            key={data.id}
          >
            <Image src={`${data.image}`} width={110} height={110} alt="team member" />
            <div className="flex flex-col p-2 gap-2">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-xl">{data.nich}</p>
            </div>
            <div className="flex justify-center items-center gap-3">
            <FaLinkedin/>
            <FaTwitter/>
            <TbWorld/>
            </div>
          </div>
        ))}
      </section>
    </div>
    </>
    )
   }