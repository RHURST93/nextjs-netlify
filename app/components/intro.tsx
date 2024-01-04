import React from "react";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import Link from 'next/link';
import { CButton } from "@coreui/react";
import headshot from '../../img/headshot.jpg'

const text = ["React", "React Native", "Next JS", "Node JS", "Mongo DB"];

const Intro = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section id="intro" className="h-screen">
        <div className="bg-cover bg-center h-screen  flex flex-col justify-center items-center background-image" style={{  }}>
          <div className="mx-auto">
            <Image
              className="rounded-full mt-5"
              src={headshot}
              width={150}
              height={150}
              alt="Picture of developer"
            />
          </div>

          <div className="text-center mt-10 mb-10 text-3xl md:text-5xl lg:text-6xl">
            <p className="text-white">
              Hi,👋 my name is Randy. <br></br> I'm a passionate full-stack developer.
            </p>
            <p className="text-white mb-4">
              I build things with <br></br>{" "}
              
            
            </p>
            <div>
            <span className="bg-blue-900 drop-shadow-lg text-white  border-2 border-white  text-bold mt-4  rounded pr-2 pl-2 pb-1 ">
                <TextTransition
                  
                  inline={true}
                  springConfig={presets.stiff}
                >
                  {text[index % text.length]}
                </TextTransition>
              </span>
              <span className="ml-1 text-white">.</span>
            </div>
            
          </div>

          <div className="flex justify-center">
            <Link href="mailto:rahurst93@gmail.com">
              <CButton className="px-5 mb-4 border-2 border-white hover:border-1" color="primary">Contact Me</CButton>
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/RHURST93" target="_blank" rel="noopener noreferrer" className="text-blue-300  hover:text-neutral-950">
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                {/* GitHub SVG */}
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/randy-hurst-2075bab0" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-neutral-950">
              <svg className="h-10 w-8" fill="currentColor" viewBox="0 0 24 24">
                {/* LinkedIn SVG */}
              </svg>
            </a>
            <a href="#" className="text-blue-300 hover:text-neutral-950">
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                {/* Placeholder SVG */}
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
