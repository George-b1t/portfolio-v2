"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, User, MapPin, Code, Server, GitBranch, Zap } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Python",
    "Golang",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "GitHub Actions",
    "ArgoCD",
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate software engineer and DevOps specialist with a focus on building scalable applications and
            cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 border-b relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                <h3 className="text-2xl font-bold text-foreground relative z-10">Professional Summary</h3>
                <div className="h-1 w-16 bg-primary rounded-full mt-2"></div>
              </div>

              <CardContent className="p-8 space-y-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"></div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-lg relative z-10"
                >
                  I{"'"}m a technology enthusiast with over 5 years of experience in software development, working with
                  Python, TypeScript, JavaScript, and Golang. I enjoy building scalable applications and designing
                  efficient cloud and infrastructure solutions using AWS, Kubernetes, and CI/CD tools like GitHub
                  Actions and ArgoCD.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Code className="h-10 w-10 p-2 bg-primary/10 rounded-lg text-primary" />,
                      title: "Development & Architecture",
                      description: "Passionate about clean code, performance optimization, and scalable applications.",
                    },
                    {
                      icon: <Server className="h-10 w-10 p-2 bg-primary/10 rounded-lg text-primary" />,
                      title: "Cloud & Infrastructure",
                      description: "Hands-on experience with AWS (S3, EC2, Route53, EKS), Kubernetes, and Docker.",
                    },
                    {
                      icon: <GitBranch className="h-10 w-10 p-2 bg-primary/10 rounded-lg text-primary" />,
                      title: "Infrastructure as Code",
                      description:
                        "Experienced in managing infrastructure with Terraform, ensuring scalable and maintainable cloud environments.",
                    },
                    {
                      icon: <Zap className="h-10 w-10 p-2 bg-primary/10 rounded-lg text-primary" />,
                      title: "CI/CD & Automation",
                      description:
                        "Skilled in setting up and optimizing CI/CD pipelines using GitHub Actions and ArgoCD.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex space-x-4 group"
                    >
                      <div className="flex-shrink-0 mt-1 transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-xl border border-primary/20 mt-6 relative overflow-hidden"
                >
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full"></div>
                  <p className="italic text-foreground relative z-10 text-lg">
                    {'"'}I thrive on solving complex problems and continuously learning new technologies. Always looking
                    for new challenges where I can contribute, grow, and build impactful solutions!{'"'}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="pt-4"
                >
                  <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-primary/5 hover:bg-primary/10 transition-all duration-300 text-sm py-1 px-3"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-10 bg-repeat"></div>
                <div className="relative z-10">
                  <div className="relative mx-auto h-36 w-36 rounded-full overflow-hidden border-4 border-primary-foreground/80 shadow-glow mb-6 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/FOTO_CHIP.jpeg?height=144&width=144"
                      alt="George Soares"
                      width={144}
                      height={144}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">George Soares</h3>
                  <p className="text-primary-foreground/90 text-lg">Software Engineer & DevOps</p>
                </div>
              </div>

              <CardContent className="p-8 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    Contact Information
                  </h4>
                  <ul className="space-y-4">
                    {[
                      {
                        icon: <Mail className="h-5 w-5 text-primary" />,
                        text: "george.soares509@gmail.com",
                        link: "mailto:george.soares509@gmail.com",
                      },
                      {
                        icon: <Linkedin className="h-5 w-5 text-primary" />,
                        text: "linkedin.com/in/george-soares-cj",
                        link: "https://www.linkedin.com/in/george-soares-cj/",
                      },
                      {
                        icon: <Phone className="h-5 w-5 text-primary" />,
                        text: "+55 (79) 998536329",
                      },
                      {
                        icon: <Github className="h-5 w-5 text-primary" />,
                        text: "github.com/georgesoares",
                        link: "https://github.com/georgesoares",
                      },
                      {
                        icon: <MapPin className="h-5 w-5 text-primary" />,
                        text: "Aracaju, Sergipe, Brasil",
                      },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            {item.link ? (
                              <a
                                href={item.link}
                                target={item.link.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition-colors duration-300 overflow-hidden text-ellipsis block"
                              >
                                {item.text}
                              </a>
                            ) : (
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {item.text}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                  className="pt-4 border-t"
                >
                  <h4 className="text-lg font-semibold mb-4">Languages</h4>
                  <div className="space-y-6">
                    {[
                      { language: "Portuguese", level: "C2 (Native)", percentage: 100 },
                      { language: "English", level: "B2", percentage: 80 },
                    ].map((lang, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{lang.language}</span>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {lang.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.percentage}%` }}
                            transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

