import React from "react";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import Link from "next/link";
import { CButton } from "@coreui/react";
import headshot from "../../img/headshot.jpg";
import {  FaLinkedin, FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import ContactModal from "./ContactModal";
import { useState } from "react";
import code from '../../img/code.png'
const text = ["React", "React Native", "Next JS", "Node JS", "Mongo DB"];

const Intro = () => {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section id="intro" className="h-screen sm:pb-8">
        <div className="bg-cover pb-8   pt-8  bg-center h-screen flex flex-col justify-center items-center background-image ">
          <div className="items-center    xs:pt-8">
            <motion.div
              className="pl-20 ml-5 pt-5  "
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: -50 }}
              transition={{ type: "spring", stiffness: 110, damping: 25 }}
            >
              <Image
                className="rounded-full mt-9  xs:w-20 sm:w-20  lg:w-40  "
                src={headshot}
                width={100}
                height={100}
                alt="Picture of developer"
              />
            </motion.div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=" flex justify-center space-x-4 mt-4"
              >
                <a
                  href="https://github.com/RHURST93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-blue-300 xs:text-2xl sm:text-3xl hover:text-neutral-950"
                >
                  <FaGithub className="logo" />
                </a>
                <a
                  href="https://www.linkedin.com/in/randy-hurst-2075bab0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-2xl text-blue-300 xs:text-2xl sm:text-3xl hover:text-neutral-950"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-2xl xs:text-2xl sm:text-3xl text-blue-300 hover:text-neutral-950"
                >
                  <FontAwesomeIcon icon={faMedium} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="text-center mt-10 mb-10 text-3xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 25 }}
          >
            <p
              style={{ width: "80%" }}
              className="text-white text-center mx-auto"
            >
              Hi,👋 my name is Randy. <br /> I'm a passionate full-stack
              developer.
            </p>
            <p className="text-white mb-4">
              I build things with <br />
            </p>
            <div>
              <span className="drop-shadow-lg text-white border-2 border-white text-bold mt-4 rounded pr-2 pl-2 pb-1">
                <TextTransition inline={true} springConfig={presets.stiff}>
                  {text[index % text.length]}
                </TextTransition>
              </span>
              <span className="ml-1 text-white">.</span>
            </div>
          </motion.div>

          <a href="mailto:hurstdev93@gmail.com" className="flex justify-center pb-3 no-underline  mb-8">
          <button
                onClick={openModal}
                style={{ height: "90px", backgroundColor: "#60a5fa" }}
                className=" change btn btn-lg bg-blue-300 button  text-bold text-center px-5 mb-20 border-2 border-white  glass"
              >
                <h1 className="hover:text-white">Contact Me</h1>
              </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Intro;