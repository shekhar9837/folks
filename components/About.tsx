import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-16 md:my-28 px-4 md:px-8">
      {/* Image Section - Visible on larger screens only */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
        <Image
          src="/assets/about.jpeg"
          width={1000}
          height={1000}
          alt="about"
          className="w-[16rem] h-[20rem] object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className='md:w-1/2 w-full'>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-0">

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          About Us
        </h1>
        <p className="text-xs md:text-sm text-para_text mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          consectetur enim velit pariatur magni officia sapiente maxime
          reprehenderit explicabo amet. Dignissimos reiciendis fugit animi
          praesentium, iure porro distinctio saepe enim, illo ab, eveniet culpa
          qui.
        </p>
        <button className="text-sm md:text-base px-6 py-2 bg-primary_button text-white rounded-full mt-4">
          Read More
        </button>
      </div>
      </div>
    </div>
  )
}

export default About
