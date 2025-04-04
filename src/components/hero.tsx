"use client"

import { motion } from "framer-motion"
import { ArrowDown, Code, Server, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroProps {
  scrollToAbout: () => void
}

export default function Hero({ scrollToAbout }: HeroProps) {
  // Skills to be animated
  const skills = ["TypeScript", "React", "Next.js", "AWS", "Kubernetes", "Docker", "CI/CD"]

  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07]" />

        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left side with main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="mb-6 px-4 py-1.5 text-sm bg-primary/10 border-primary/20 text-primary"
              >
                Software Engineer & DevOps Specialist
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              George Soares
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                Building <span className="text-primary font-medium">scalable applications</span> and designing{" "}
                <span className="text-primary font-medium">efficient cloud infrastructure</span> solutions with over 5
                years of experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="rounded-full px-8 text-base font-medium shadow transition-colors duration-200 bg-primary hover:bg-primary/80"
              >
                Discover More
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-medium border-primary/20 text-primary transition-colors duration-200"
                onClick={() => window.open("https://github.com/George-b1t", "_blank")}
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Badge variant="outline" className="bg-muted/50 transition-colors duration-200">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side with animated icons */}
          <motion.div
            className="lg:col-span-2 hidden lg:flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative w-full h-80">
              {/* Code icon */}
              <motion.div
                className="absolute top-0 left-10"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-primary/10">
                  <Code className="h-16 w-16 text-primary" />
                </div>
              </motion.div>

              {/* Server icon */}
              <motion.div
                className="absolute top-1/2 right-0"
                initial={{ y: 0 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-primary/10">
                  <Server className="h-16 w-16 text-primary" />
                </div>
              </motion.div>

              {/* Git icon */}
              <motion.div
                className="absolute bottom-0 left-20"
                initial={{ y: 0 }}
                animate={{ y: [5, -15, 5] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-primary/10">
                  <GitBranch className="h-16 w-16 text-primary" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToAbout}
            aria-label="Scroll down"
            className="rounded-full h-12 w-12 border-primary/20 text-primary transition-colors duration-200"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-br-full opacity-50" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-tl-full opacity-50" />
    </section>
  )
}
