import React from "react";
import Image from "next/image";
import headshot from "../../img/headshot.jpg";
import introBackground from "../../img/introBackground.jpg";
import TextTransition, { presets } from "react-text-transition";
import Link from 'next/link';
import { CButton } from "@coreui/react";

const text = ["React", "Next", "Node", "Mongo"];

const Intro = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);
  const imageUrl = require("../../img/headshot.jpg");
  return (
    <>
      <section id="intro" className=" h-screen background-image">
        <div className="flex" style={{ paddingBottom: 10, paddingTop: 100 }}>
          <div className="flex mx-auto">
            <Image
              className="flex mx-auto mt-4 rounded-full"
              src={imageUrl}
              width={250}
              height={250}
              alt="Picture of developer"
            />
          </div>
        </div>
        <div
          className="flex justify-center mt-10 mb-10"
          style={{ fontSize: 50 }}
        >
          <a
            href="https://github.com/RHURST93"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-blue-300  hover:text-neutral-950"
          >
            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.37-1.338-3.37-1.338-.454-1.153-1.11-1.461-1.11-1.461-.907-.617.07-.604.07-.604 1.004.07 1.532 1.03 1.532 1.03.893 1.53 2.345 1.088 2.913.832.092-.647.35-1.087.635-1.337-2.22-.252-4.55-1.11-4.55-4.943 0-1.09.39-1.983 1.03-2.68-.103-.253-.448-1.27.098-2.647 0 0 .84-.269 2.75 1.025.8-.223 1.654-.334 2.504-.338.848.004 1.705.115 2.504.338 1.91-1.294 2.75-1.025 2.75-1.025.547 1.377.2 2.394.1 2.647.64.697 1.027 1.59 1.027 2.68 0 3.844-2.333 4.688-4.562 4.937.358.308.678.918.678 1.852 0 1.336-.012 2.416-.012 2.74 0 .267.18.578.688.48C19.139 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/randy-hurst-2075bab0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-neutral-950"
          >
            <svg className="h-10 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.302 0H3.7C1.65 0 0 1.65 0 3.7v16.602c0 2.05 1.65 3.698 3.7 3.698h16.602c2.05 0 3.698-1.65 3.698-3.7V3.7C24 1.65 22.35 0 20.302 0zM7.1 20.302H4.2V9h2.9v11.302zM5.65 7.6c-1 0-1.65-.65-1.65-1.5s.65-1.5 1.65-1.5c1 0 1.65.65 1.65 1.5s-.65 1.5-1.65 1.5zm15.652 12.7h-2.9V14c0-1.2-.45-2-1.4-2-1 0-1.6.65-1.85 1.3-.1.25-.1.6-.1.95v6.75h-2.9V9h2.85v1.25h.05c.4-.65 1.35-1.65 2.85-1.65 2 0 3.5 1.3 3.5 4.1v6.5z" />
            </svg>
          </a>

          <a href="#" className=" text-blue-300 hover:text-neutral-950">
            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.4 2H4.6A2.6 2.6 0 0 0 2 4.6V19.4A2.6 2.6 0 0 0 4.6 22h7.45v-7.82H9.6V11.5h2.45V9.3c0-2.43 1.49-3.76 3.66-3.76 1.04 0 1.93.08 2.2.12v2.55h-1.5c-1.18 0-1.4.56-1.4 1.38v1.8h2.8l-.4 2.68h-2.4V22h4.7A2.6 2.6 0 0 0 22 19.4V4.6A2.6 2.6 0 0 0 19.4 2z"></path>
            </svg>
          </a>
        </div>
        <div>
          <h1
            className=" text-white text-center mt-4 mr-10 ml-10"
            style={{ fontSize: 35 }}
          >
            Hi,👋 my name is Randy. Im a passionate fullstack developer.<br></br>
            I specialize in building web applications with
            <span className="gradient">
              {" "}
              <TextTransition
                style={{ fontSize: 80 }}
                inline={true}
                springConfig={presets.stiff}
              >
                {text[index % text.length]}
              </TextTransition>
            </span>
            .{" "}
          </h1>
          <div className="ml-5 mt-5 flex justify-center"  >
          <Link href="mailto:rahurst93@gmail.com">
          <CButton style={{fontSize: 18}} className="border-white  px-5 mb-5" color="primary">Contact Me</CButton>
        </Link>
        <div className=""></div>
        </div>
        </div>
        
      </section>
      
    </>
  );
};

export default Intro;
