import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-between p-10 bg-gray-100 my-10">
      {/* Logo Section */}
      <div className="flex w-full md:w-1/4 flex-col items-center mb-6 md:mb-0">
        <Image
          src="/assets/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="mb-2"
        />
      </div>

      {/* Contact Us Section */}
      <div className="w-full md:w-1/4 text-primary mb-6 md:mb-0">
        <h3 className="text-primary font-bold mb-4">Contact Us</h3>
        <p className="text-xs mb-4">
          Lorem Ipsum Pvt Ltd. <br /> 5/1, Magalton Road, <br /> Phartosh Gate near YTM Market, XYZ-343434
        </p>
        <p className="text-xs mb-4">example2020@gmail.com</p>
        <p className="text-xs">(904) 443-0343</p>
      </div>

      {/* More Section */}
      <div className="w-full md:w-1/4 text-primary mb-6 md:mb-0">
        <h4 className="font-bold mb-4">More</h4>
        <ul>
          <li className="text-xs mb-4">About Us</li>
          <li className="text-xs mb-4">Products</li>
          <li className="text-xs mb-4">Career</li>
          <li className="text-xs mb-4">Contact Us</li>
        </ul>
      </div>

      {/* Social Links Section */}
      <div className="w-full md:w-1/4 text-primary mb-6 md:mb-0">
        <h4 className="font-bold mb-4 md:flex hidden">Social Links</h4>
        <ul className="flex space-x-4 mb-4 justify-center md:justify-start">
          <li><Instagram className="w-5 h-5 text-gray-600" /></li>
          <li><Twitter className="w-5 h-5 text-gray-600" /></li>
          <li><Facebook className="w-5 h-5 text-gray-600" /></li>
        </ul>
        <p className="text-xs text-center md:text-left">© 2022 Food Truck Example</p>
      </div>
    </div>
  );
};

export default Footer;
