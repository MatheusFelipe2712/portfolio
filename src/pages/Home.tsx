import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </>
  )
}
