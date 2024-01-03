import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import code from '../../img/code.png';
import { CButton } from '@coreui/react';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-white py-4">
      <div className="container mx-auto md:flex md:justify-between">
        {/* Left Column */}
        <div className="md:w-1/2 md:order-1 flex items-center justify-center md:justify-start">
          <Image className="ml-5" src={code} alt="logo" width={60} height={60} />
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 md:order-3 flex flex-col items-center justify-center md:justify-end space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:text-left">
          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-slate-600 underline">Links</h3>
            <NextLink href="/" className="no-underline">
              Home
            </NextLink>
            <NextLink href="#about" className="no-underline">
              About
            </NextLink>
            <NextLink href="#projects" className="no-underline">
              Projects
            </NextLink>
          </div>

          {/* Contact Me Button */}
          <NextLink href="mailto:rahurst93@gmail.com" className="no-underline">
            <CButton color="primary">Contact Me</CButton>
          </NextLink>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-4 md:mt-0 text-gray-400 md:order-2">
          &copy; {new Date().getFullYear()} Randy Hurst. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
