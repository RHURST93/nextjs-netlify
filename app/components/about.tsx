import React, { useEffect } from "react";
import Image from "next/image";
import {
  CAccordionItem,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import { motion, useAnimation } from "framer-motion";
import "@coreui/coreui/dist/css/coreui.min.css";

const About: React.FC = () => {
  const introControls = useAnimation();
  const educationControls = useAnimation();
  const skillsControls = useAnimation();

  useEffect(() => {
    const animateOnScroll = (
      sectionId: string,
      controls: any,
      threshold: number
    ) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const height = window.innerHeight;
        if (top >= height * (threshold / 100) && bottom <= height) {
          controls.start({
            opacity: 1,
            scale: 1.0,
            transition: { duration: 0.5 },
          });
        } else {
          controls.start({
            opacity: 0.8,
            scale: 0.9,
            transition: { duration: 0.5 },
          });
        }
      }
    };

    const handleScroll = () => {
      animateOnScroll("about", introControls, 20);
      animateOnScroll("education", educationControls, 30);
      animateOnScroll("skills", skillsControls, 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [introControls, educationControls, skillsControls]);

  const calculateExperience = (startDate: string): number => {
    const today: Date = new Date();
    const start: Date = new Date(startDate);
    const diffTime: number = Math.abs(today.getTime() - start.getTime());
    const diffMonths: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMonths;
  };

  return (
    <>
      <div>
        <motion.div id="about" className="bg-white p-4" animate={introControls}>
          <h1 className="text-center underline mt-4">About Me</h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div className="sm:order-2">
              <Image
                className="mx-auto"
                src={require("../../img/firstAbout.jpg")}
                alt="Me"
                width={400}
                height={300}
              />
            </div>
            <div className="sm:order-2 md:order-2 lg:order-2">
              <p className="mx-auto mt-4 text-justify sm:text-left xs:w-80 mr-5 px-3 text-wrap">
              
  I am a passionate individual with expertise in React, React Native, 
  MongoDB, Node.js, HTML, and CSS. Hailing from the heart of Oklahoma, 
  I possess a deep connection to my roots and embrace the values instilled
  by my upbringing. Beyond the realms of technology, I find joy and solace
  in capturing the wonders of wildlife through photography, reveling in the 
  tranquil beauty of nature's creations. Golfing under the open sky and the
  serenity of fishing in quiet waters are pursuits that bring me immense happiness
  and relaxation. Embracing both the technological advancements and the tranquility
  of nature, I find a harmonious balance that enriches my life.
</p>

             
            </div>
          </div>
        </motion.div>

        <motion.div id="education" className="bg-white p-4" animate={educationControls}>
          <h2 className="text-center underline">Education</h2>
          
    

<CAccordion activeItemKey={2}>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>
      Front End Development Fundamentals
    </CAccordionHeader>
    <CAccordionBody>
      <table className="table-auto w-full border-collapse border border-gray-300 mr-5">
        <thead>
          <tr className="bg-blue-300">
            <th className="px-4 py-2 border">School</th>
            <th className="px-4 py-2 border">Graduated</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border">
              Nucamp Coding Bootcamp
            </td>
            <td className="px-4 py-2 border">06/2023</td>
          </tr>
        </tbody>
      </table>
      <h5 className="underline mt-2">Stacks</h5>
      <CListGroup>
        <CListGroupItem>
          <Image src={require('../../img/html.png')} alt="node logo" className="w-6 h-6 mr-2 inline-block" />
          HTML
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/css.png')} alt="node logo" className="w-6 h-6 mr-2 inline-block" />
          CSS
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/bootstrap.png')} alt="node logo" className="w-6 h-6 mr-2 inline-block" />
          Bootstrap
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/css.png')} alt="node logo" className="w-6 h-6 mr-2 inline-block" />
          SCSS
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/git.png')} alt="node logo" className="w-6 h-6 mr-2 inline-block" />
          GIT
        </CListGroupItem>
      </CListGroup>
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>
      Front End Web & Mobile Development
    </CAccordionHeader>
    <CAccordionBody>
      <table className=" table-auto w-full border-collapse border border-gray-300 mr-5">
        <thead>
          <tr className="bg-blue-300">
            <th className="px-4 py-2 border">School</th>
            <th className="px-4 py-2 border">Graduated</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border">
              Nucamp Coding Bootcamp
            </td>
            <td className="px-4 py-2 border">11/2023</td>
          </tr>
        </tbody>
      </table>
      <h5 className="underline mt-2">Stacks</h5>
      <CListGroup>
        <CListGroupItem>
          <Image src={require('../../img/js2.png')} alt="javascript logo" className="w-6 h-6 mr-2 inline-block" />
          JavaScript
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/react.png')} alt="react logo" className="w-6 h-6 mr-2 inline-block" />
          React
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/react.png')} alt="react logo" className="w-6 h-6 mr-2 inline-block" />
          React Native
        </CListGroupItem>
      </CListGroup>
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>
      FullStack Software Development
    </CAccordionHeader>
    <CAccordionBody>
      <table className="table-auto w-full border-collapse border border-gray-300 mr-5">
        <thead>
          <tr className="bg-blue-300">
            <th className="px-4 py-2 border">School</th>
            <th className="px-4 py-2 border">Graduated</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border">
              Nucamp Coding Bootcamp
            </td>
            <td className="px-4 py-2 border">12/2023</td>
          </tr>
        </tbody>
      </table>
      <h5 className="underline mt-2">Stacks</h5>
      <CListGroup>
        <CListGroupItem>
          <Image src={require('../../img/node.png')} alt="node js logo" className="w-6 h-6 mr-2 inline-block" />
          Node JS
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/express.png')} alt="express js logo" className="w-6 h-6 mr-2 inline-block" />
          Express JS
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/mongo.png')} alt="mongo db logo" className="w-6 h-6 mr-2 inline-block" />
          Mongo DB
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/gcp.png')} alt="google cloud logo" className="w-6 h-6 mr-2 inline-block" />
          Google Cloud
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/node.png')} alt="node logo" className="w-6 h-6 mr-2 inline-block" />
          Middleware
        </CListGroupItem>
      </CListGroup>
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={4}>
    <CAccordionHeader>
      Modern Software Development
    </CAccordionHeader>
    <CAccordionBody>
      <table className="table-auto w-full border-collapse border border-gray-300 mr-5">
        <thead>
          <tr className="bg-blue-300">
            <th className="px-4 py-2 border">School</th>
            <th className="px-4 py-2 border">Graduated</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border">
              Nucamp Coding Bootcamp
            </td>
            <td className="px-4 py-2 border">05/2024</td>
          </tr>
        </tbody>
      </table>
      <h5 className="underline mt-2">Stacks</h5>
      <CListGroup>
        <CListGroupItem>
          <Image src={require('../../img/python.png')} alt="python logo" className="w-6 h-6 mr-2 inline-block" />
          Python
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/flask.png')} alt="flask logo" className="w-6 h-6 mr-2 inline-block" />
          Flask
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/mongo.png')} alt="mongo db logo" className="w-6 h-6 mr-2 inline-block" />
          Docker
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/aws.png')} alt="google cloud logo" className="w-6 h-6 mr-2 inline-block" />
          AWS
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/django.png')} alt="django logo" className="w-6 h-6 mr-2 inline-block" />
          Django
        </CListGroupItem>
        <CListGroupItem>
          <Image src={require('../../img/kubernetes.png')} alt="kubernetes logo" className="w-6 h-6 mr-2 inline-block" />
          Kubernetes
        </CListGroupItem>
      </CListGroup>
    </CAccordionBody>
  </CAccordionItem>
          </CAccordion>
        </motion.div>

        <motion.div id="skills" className="bg-white p-4" animate={skillsControls}>
          <h2 className="mx-auto text-center underline">Skills</h2>
          <table className="table-auto w-full border-collapse border border-gray-300 mr-5 " width={200}>
          <thead>
    <tr className="bg-blue-300">
      <th className="px-4 py-2 border">Skill</th>
      <th className="px-4 py-2 border">Experience</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/react.png")} alt="react logo" className="w-6 h-6 mr-2 inline-block" />React</td>
      <td className="px-4 py-2 border">{calculateExperience('2023-08-01')} months</td>
    </tr>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/js2.png")} alt="javascript logo" className="w-6 h-6 mr-2 inline-block" />JavaScript</td>
      <td className="px-4 py-2 border">{calculateExperience('2023-07-01')} months</td>
    </tr>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/react.png")} alt="react native logo" className="w-6 h-6 mr-2 inline-block" />React Native</td>
      <td className="px-4 py-2 border">{calculateExperience('2023-09-01')} months</td>
    </tr>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/mongo.png")} alt="mongo db logo" className="w-6 h-6 mr-2 inline-block" />Mongo DB</td>
      <td className="px-4 py-2 border">{calculateExperience('2023-10-01')} months</td>
    </tr>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/node.png")} alt="nodejs logo" className="w-6 h-6 mr-2 inline-block" />Node</td>
      <td className="px-4 py-2 border">{calculateExperience('2023-11-01')} months</td>
    </tr>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/nextlogo.png")} alt="next js logo" className="w-6 h-6 mr-2 inline-block" />Next JS</td>
      <td className="px-4 py-2 border">{calculateExperience('2023-11-01')} months</td>
    </tr>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/python.png")} alt="python logo" className="w-6 h-6 mr-2 inline-block" />Python</td>
      <td className="px-4 py-2 border">{calculateExperience('2024-12-15')} months</td>
    </tr>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/postgres.png")} alt="postgres logo" className="w-6 h-6 mr-2 inline-block" /> PostgreSQL</td>
      <td className="px-4 py-2 border">{calculateExperience('2024-01-01')} months</td>
    </tr>
    <tr className="bg-white">
      <td className="px-4 py-2 border"><Image src={require("../../img/docker.png")} alt="docker logo" className="w-6 h-6 mr-2 inline-block" />Docker</td>
      <td className="px-4 py-2 border">{calculateExperience('2024-02-01')} months</td>
    </tr>
    {/* Add more rows for other skills */}
  </tbody>
          </table>
        </motion.div>
      </div>
    </>
  );
};

export default About;
