"use client"

import type React from "react"

import { useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <div className="min-h-screen bg-background">
        <Navbar
          scrollToSection={scrollToSection}
          aboutRef={aboutRef as React.RefObject<HTMLDivElement>}
          skillsRef={skillsRef as React.RefObject<HTMLDivElement>}
          experienceRef={experienceRef as React.RefObject<HTMLDivElement>}
          educationRef={educationRef as React.RefObject<HTMLDivElement>}
          contactRef={contactRef as React.RefObject<HTMLDivElement>}
        />
        <main>
          <Hero scrollToAbout={() => scrollToSection(aboutRef as React.RefObject<HTMLDivElement>)} />
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={educationRef}>
            <Education />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
  )
}
