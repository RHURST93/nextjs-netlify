import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import code from '../../img/code.png';
import { CButton } from '@coreui/react';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-white py-4">
      <div className=" grid-cols-1 container mx-auto  flex-col md:flex-row ">
        <div className="md:order-2 grid grid-cols-11">
          <Image className='ml-5' src={code} alt='logo' />
        </div>
        <div className=''>
             <NextLink className='no-underline grid  ' href="mailto:rahurst93@gmail.com">
            
            <CButton color="primary">Contact Me</CButton>
          
        </NextLink>
        </div>
        <div className="grid grid-cols-4 space-y-0 md:space-x-2 md:space-y-0 md:flex-1 no-underline">
            <div className='col-span-1'>
            <h3 className='text-slate-600 underline justify-center' >Links</h3>
          <NextLink className='no-underline' href="/">Home
          </NextLink>
          <NextLink className='no-underline' href="#about">About
          </NextLink>
          <NextLink className='no-underline' href="#projects">Projects
          </NextLink>
            </div>
        </div>
        
        <div className="text-center mt-4 md:mt-0 text-gray-400 md:order-3">
        
          &copy; {new Date().getFullYear()} Randy Hurst. All Rights Reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
