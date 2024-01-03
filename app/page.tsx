'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Intro from './components/intro'
import About from './components/about'
import ProjectComponent from './components/projects'
import Footer from './components/footer'
import ContactForm from './components/contactForm'



export default function Home() {
  return (
    <>
    <main>
      <Nav />
      <Intro />
      <About />
      <ProjectComponent />
      <ContactForm />
      
      
      <Footer />
      
      
    
    </main>
    </>
  )
}
