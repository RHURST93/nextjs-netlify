import Image, { StaticImageData } from 'next/image';
import nextAppImage from '../../img/nextapp.png';
import photo from '../../img/photo.png';

interface Project {
  id: number;
  name: string;
  description: string;
  liveDemoLink: string;
  photo: StaticImageData;
}

const projects: Project[] = [
  {
    id: 1,
    name: '@PeaceWithACamera',
    description: 'A website for my wildlife photography. This site was built with React, utilizing Reactstrap and Lightbox.js. I used the gradient in the navbar to make it appear as the sun is peeking in at the corner of the screen. In the footer the leaves signify natural habitats. It felt like the right combonation. ',
    liveDemoLink: 'https://mellifluous-toffee-499686.netlify.app/',
    photo: photo,
  },
  // Add other projects here
  {
    id: 1,
    name: 'Web Development Portfolio',
    description: 'This website showcases my web development skills. I built this project using Next JS and Typescript. I also utilized libraries such as Daisy UI and Core UI to give the page a modern feel. I also used a text transition in my hero.',
    liveDemoLink: '/',
    photo: nextAppImage,
  },
];
interface ProjectsProps {
    darkMode: boolean;
  }
const ProjectComponent: React.FC = () => {

  return (
    <div className="mx-auto max-w-4xl px-6 "> {/* Centers content and sets max width */}
      <section className='bg-white' id="projects">
        <h2 className="text-2xl font-bold mb-4 underline">Projects</h2>
        <div className="grid gap-8 lg:grid-cols-2"> {/* Grid layout for projects */}
          {projects.map((project) => (
            <div key={project.id} className="border p-4">
              <div className="mb-4">
                <Image src={project.photo} alt={project.name} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectComponent;
