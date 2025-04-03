"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, Code, Briefcase, GraduationCap, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
  aboutRef: React.RefObject<HTMLDivElement>
  skillsRef: React.RefObject<HTMLDivElement>
  experienceRef: React.RefObject<HTMLDivElement>
  educationRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

export default function Navbar({
  scrollToSection,
  aboutRef,
  skillsRef,
  experienceRef,
  educationRef,
  contactRef,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("about")

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      const sections = [
        { name: "about", ref: aboutRef },
        { name: "skills", ref: skillsRef },
        { name: "experience", ref: experienceRef },
        { name: "education", ref: educationRef },
        { name: "contact", ref: contactRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section.name)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [aboutRef, skillsRef, experienceRef, educationRef, contactRef])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: "About", ref: aboutRef, icon: <User className="h-4 w-4" /> },
    { name: "Skills", ref: skillsRef, icon: <Code className="h-4 w-4" /> },
    { name: "Experience", ref: experienceRef, icon: <Briefcase className="h-4 w-4" /> },
    { name: "Education", ref: educationRef, icon: <GraduationCap className="h-4 w-4" /> },
    { name: "Contact", ref: contactRef, icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-md border-b border-border/20" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold relative group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          George<span className="text-primary">.dev</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.name.toLowerCase()

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(link.ref)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="flex items-center">
                    <span className={`mr-2 ${isActive ? "opacity-100" : "opacity-70"}`}>{link.icon}</span>
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 bg-primary rounded-full"
                      layoutId="activeSection"
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Button>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              onClick={() => scrollToSection(contactRef)}
              className="ml-2 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center">
                Hire Me
                <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <motion.div
          className="flex items-center md:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`rounded-full ${isOpen ? "bg-primary/10 text-primary" : ""}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md shadow-lg border-b border-border/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.name.toLowerCase()

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => {
                        scrollToSection(link.ref)
                        closeMenu()
                      }}
                      className={`w-full justify-start rounded-lg py-3 ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center">
                        <span className="mr-3">{link.icon}</span>
                        {link.name}
                      </span>
                    </Button>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-2 mt-2 border-t border-border/20"
              >
                <Button
                  onClick={() => {
                    scrollToSection(contactRef)
                    closeMenu()
                  }}
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Hire Me
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

