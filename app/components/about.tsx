


import React from "react";
import Image from "next/image";
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionButton,
  CAccordionItem,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const About = () => {
  return (
    <>
      <div>
        <section id="about" className="bg-white p-4">
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
            <div className="sm:order-2 md:order-2 lg:order-3">
              <Image
                className="mx-auto"
                src={require("../../img/best3.jpg")}
                alt="Me"
                width={400}
                height={300}
              />
            </div>
            <div className="sm:order-2 md:order-2 lg:order-2 xs:w-80">
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
                      <CListGroupItem>HTML</CListGroupItem>
                      <CListGroupItem>CSS</CListGroupItem>
                      <CListGroupItem>Bootstrap</CListGroupItem>
                      <CListGroupItem>SCSS</CListGroupItem>
                      <CListGroupItem>GIT</CListGroupItem>
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
                      <CListGroupItem>JavaScript</CListGroupItem>
                      <CListGroupItem>React</CListGroupItem>
                      <CListGroupItem>React Native</CListGroupItem>
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
                      <CListGroupItem>Node JS</CListGroupItem>
                      <CListGroupItem>Express JS</CListGroupItem>
                      <CListGroupItem>Mongo DB</CListGroupItem>
                      <CListGroupItem>Google Cloud</CListGroupItem>
                      <CListGroupItem>Middleware</CListGroupItem>
                    </CListGroup>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </div>
            <div className="sm:order-2 md:order-2 lg:order-3">
              <Image
                className="mx-auto"
                src={require("../../img/second.jpg")}
                alt="Me"
                width={300}
                height={200}
              />
            </div>
            <div className="sm:order-2 md:order-2 lg:order-3 mb-5  xs:w-60">
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
                    <td className="px-4 py-2 border">React</td>
                    <td className="px-4 py-2 border">1 year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2 border">JavaScript</td>
                    <td className="px-4 py-2 border">1 year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2 border">React Native</td>
                    <td className="px-4 py-2 border">6 months</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2 border">Mongo DB</td>
                    <td className="px-4 py-2 border">1 month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2 border">Node</td>
                    <td className="px-4 py-2 border">1 month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2 border">Next JS</td>
                    <td className="px-4 py-2 border">1 month</td>
                  </tr>
                  {/* Add more rows for other skills */}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
