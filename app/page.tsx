'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'
import Intro from './components/intro'
import About from './components/about'
import ProjectComponent from './components/projects'
import Footer from './components/footer'
import head from 'next/head';


export default function Home() {
  return (
    <>
        <head>
          <title>Randy Hurst Web Dev</title>
          </head>

    <main>

      <Nav />
      <Intro />
      <About />
      <ProjectComponent />
      
      
      <Footer />
      
      
    
    </main>
    </>
  )
}
