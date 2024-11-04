import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      {/* Text and Logo Section */}
      <div className="w-full md:w-1/2 flex flex-col md:items-start items-center justify-center relative px-4 md:px-20 py-0 md:py-0">
        <Image
          src="/assets/logo.png"
          width={80}
          height={80}
          alt="logo"
          className="absolute top-4 md:top-10 md:block hidden"
        />
        <div className="flex flex-col md:items-start items-center mt-20 md:mt-0">
          <h2 className="text-primary font-bold text-4xl md:text-5xl md:leading-tight">
            Discover the
          </h2>
          <h2 className="text-primary font-bold text-4xl md:text-5xl md:leading-tight flex items-center gap-2">
            <span className="block my-2 text-primary_button">Best</span> Food
          </h2>
          <h2 className="text-primary font-bold text-4xl md:text-5xl md:leading-tight">
            and Drinks
          </h2>

          <p className="text-sm md:text-base text-para_text py-4">
            Naturally made Healthcare Products for the <br /> better care &
            support of your body.
          </p>
          <button className="px-6 md:px-8 py-2 md:py-3 rounded-full bg-primary_button text-white font-bold  mt-4">
            Explore Now!
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full md:h-screen h-1/2  relative  ">
        <Image
          src="/assets/home.jpeg"
          width={1920}
          height={1080}
          alt="home"
          className="md:h-screen h-[24rem]  w-full md:object-fill object-cover md:pl-4 md:pb-8  md:rounded-b-[198px] rounded-b-[90px] z-0"
        />
        <Image
          src="/assets/Vector.png"
          width={1920}
          height={1080}
          alt="vector"
          className="absolute right-0 top-0 md:h-screen    object-fill z-69"
        />
        <button className="md:top-8 md:right-8 top-4 right-4 z-99 absolute px-4 py-2 text-xs border rounded-full text-white">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
