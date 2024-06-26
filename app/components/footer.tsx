import React from "react";
import Link from "next/link";
import Image from "next/image";
import code from "../../img/code.png";
import { CButton } from "@coreui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ContactModal from "./ContactModal";
const Footer = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  return (
    <footer className="bg-base-300 text-white py-4">
      <div className="container mx-auto md:flex md:justify-between">
        {/* Left Column */}
        <div className="md:w-1/2 md:order-1 flex items-center justify-center md:justify-start">
          <Image
            className=" mx-auto"
            src={code}
            alt="logo"
            width={50}
            height={50}
          />
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 md:order-3 flex flex-col items-center justify-center md:justify-end space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:text-left">
          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-slate-600 underline">Links</h3>
            <a href="#" className="no-underline">
              Home
            </a>
            <a href="#about" className="no-underline">
              About
            </a>
            <a href="#projects" className="no-underline">
              Projects
            </a>
          </div>

          {/* Contact Me Button */}
          <div className="">
            <CButton className="ml-3" onClick={openModal} color="primary">Contact Me</CButton>

          </div>
          
          <ContactModal visible={isModalVisible} onClose={closeModal} code={code} />

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
