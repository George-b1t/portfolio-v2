"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Award,
  Calendar,
  BookOpen,
  MapPin,
  Coffee,
  Code,
  BookMarked,
  Brain,
  UsersRound,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "UNIVERSIDADE TIRADENTES-UNIT",
      location: "ARACAJU, SERGIPE, BRASIL",
      period: "2021-01 - PRESENT",
      description:
        "Focusing on software development, algorithms, data structures, and computer systems.",
    },
  ]

  const certifications = [
    {
      name: "Rocketseat ReactJS Ignite",
      date: "2022-01",
      issuer: "Rocketseat",
      skills: [
        "React.js",
        "TypeScript",
        "State Management",
        "Performance",
      ],
    },
    {
      name: "Rocketseat NodeJS Ignite",
      date: "2022-03",
      issuer: "Rocketseat",
      skills: ["Node.js", "Express", "API Development", "Database Integration"],
    },
    {
      name: "Nasa Space Apps Challenger",
      date: "2023-10",
      issuer: "NASA",
      skills: [
        "Problem Solving",
        "Innovation",
        "Teamwork",
        "Space Technology",
      ],
    },
  ]

  const hobbies = [
    { name: "Coffee Exploration", icon: <Coffee className="h-5 w-5" /> },
    { name: "Tech Communities", icon: <UsersRound className="h-5 w-5" /> },
    { name: "Personal Projects", icon: <Code className="h-5 w-5" /> },
    { name: "Reading", icon: <BookMarked className="h-5 w-5" /> },
    { name: "Continuous Learning", icon: <Brain className="h-5 w-5" /> },
  ]

  const continuousLearning = [
    "Online Courses",
    "Technical Books",
    "Tech Conferences",
    "Open Source Contributions",
    "Community Engagement",
  ]

  // Constante para delays base
  const baseDelay = 0.3

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-tr-full opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic background and professional certifications that have shaped my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Coluna Esquerda - Education & Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Cabeçalho da Educação */}
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl shadow-md mr-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Education
              </h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: baseDelay, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="mb-10"
              >
                <Card className="overflow-hidden border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
                    <h4 className="text-2xl font-bold relative z-10">{edu.degree}</h4>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex flex-col space-y-4">
                      <motion.div
                        className="flex items-center text-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: baseDelay + 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{edu.institution}</span>
                      </motion.div>

                      <motion.div
                        className="flex items-center text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: baseDelay + 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <span>{edu.location}</span>
                      </motion.div>

                      <motion.div
                        className="flex items-center text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: baseDelay + 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <span>{edu.period}</span>
                      </motion.div>

                      <motion.div
                        className="mt-6 pt-6 border-t"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: baseDelay + 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <p className="text-muted-foreground text-lg">{edu.description}</p>
                      </motion.div>

                      <motion.div
                        className="mt-6 pt-6 border-t"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: baseDelay + 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <h5 className="font-semibold text-lg mb-4">Key Subjects</h5>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Algorithms",
                            "Data Structures",
                            "Software Engineering",
                            "Database Systems",
                            "Computer Networks",
                          ].map((subject, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: baseDelay + 0.6 + i * 0.05, ease: "easeOut" }}
                              viewport={{ once: true }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-3 py-1"
                              >
                                {subject}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Seção de Hobbies */}
            <div className="mt-12">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl shadow-md mr-4">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Interests & Hobbies
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: baseDelay + 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col space-y-6">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Exploring coffee shops and coworking spaces around the city; building personal software projects and engaging with tech communities.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {hobbies.map((hobby, i) => (
                          <motion.div
                            key={i}
                            className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-4 text-center border border-primary/10 group transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: baseDelay + 0.4 + i * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                          >
                            <div className="flex flex-col items-center">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-primary/20">
                                {hobby.icon}
                              </div>
                              <span className="font-medium">{hobby.name}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Coluna Direita - Certifications & Continuous Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Cabeçalho de Certificações */}
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-xl shadow-md mr-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Certifications & Courses
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: baseDelay + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="overflow-hidden border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="bg-gradient-to-r from-primary to-primary/70 p-6 text-primary-foreground flex justify-between items-center relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
                      <h4 className="text-xl font-bold relative z-10">{cert.name}</h4>
                      <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/10 relative z-10">
                        {cert.date}
                      </Badge>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex flex-col space-y-6">
                        <motion.div
                          className="flex items-center text-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: baseDelay + 0.1 + index * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 transition-colors duration-300 group-hover:bg-primary/20">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium">Issuer: {cert.issuer}</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: baseDelay + 0.2 + index * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          <h5 className="font-semibold text-lg mb-4">Skills Acquired</h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: baseDelay + 0.3 + index * 0.1 + i * 0.05, ease: "easeOut" }}
                                viewport={{ once: true }}
                              >
                                <Badge
                                  variant="outline"
                                  className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 px-3 py-1 transition-colors duration-200"
                                >
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: baseDelay + 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="mt-12"
            >
              <Card className="overflow-hidden border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/10 to-transparent relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-tr-full"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold">Continuous Learning</h4>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg">
                    I&apos;m committed to continuous learning and staying updated with the latest technologies and best practices in software development and cloud infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {continuousLearning.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: baseDelay + 0.9 + i * 0.05, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="px-4 py-1.5 text-base">
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
