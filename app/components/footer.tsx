import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import code from '../../img/code.png'
import { CButton } from '@coreui/react';

const Footer = () => {
  return (
    <>
    <footer className="bg-base-300 text-white py-4 ">
      <div className="container mx-auto flex items-center justify-between">
      <Image className='ml-5' src={code} alt='logo' />
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-neutral-950 transition-colors duration-300 no-underline">
            Home
          </Link>
          <Link href="#about" className="hover:text-neutral-950 transition-colors duration-300 no-underline">
            About
          </Link>
          <Link href="#projects" className="hover:text-neutral-950 hover:drop-shadow-lg transition-colors duration-300 no-underline">
            Projects
          </Link>
          </div>
          {/* Add more links as needed */}
          <Link href="mailto:rahurst93@gmail.com">
          <CButton color="primary">Contact Me</CButton>
        </Link>
        </div>
      <div className="text-center mt-4 text-gray-400">
        &copy; {new Date().getFullYear()} Randy Hurst. All Rights Reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer