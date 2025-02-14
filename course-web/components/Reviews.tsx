'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdStar } from 'react-icons/io';
import ourTeam from '@/jsonData/ourTeam.json';

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(ourTeam.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? (totalSlides - 1) * itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= ourTeam.length ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="w-full min-h-screen lg:py-4 pt-36 pb-5 bg-[#F7F7F7] text-black">
      <main className="container px-4 mx-auto">
        {/* Header Section */}
        <section className="w-full flex md:justify-start justify-center px-1 mb-6">
          <h1 className="text-3xl font-bold md:block hidden">Customer Testimonials</h1>
          <h1 className="text-3xl font-bold md:hidden block">What Our Students Say</h1>
        </section>

        {/* Review Section */}
        <section className="w-full flex flex-col items-center gap-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {ourTeam
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((member) => (
                <div
                  key={member.id}
                  className="w-full h-auto flex flex-col px-4 py-8 items-center gap-4 border rounded-md bg-white shadow-md"
                >
                  {/* Star Ratings */}
                  <div className="w-full flex justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <IoMdStar key={i} className="text-lg text-yellow-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p>
                    {member.testimonial ||
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center">
                    <Image
                      src={member.image || '/placeholder.jpg'}
                      width={56}
                      height={56}
                      alt="user image"
                      className="rounded-full"
                    />
                    <div className="flex flex-col gap-1 pl-3">
                      <h1 className="font-semibold">{member.name}</h1>
                      <p className="font-medium">{member.nich}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Dots & Buttons */}
          <div className="flex flex-col items-center gap-3">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                  className={`w-[10px] h-[10px] rounded-full ${
                    currentIndex === index * itemsPerPage ? 'bg-black' : 'bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
