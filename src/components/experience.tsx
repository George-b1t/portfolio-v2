"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Software Architect | DevOps Engineer",
      company: "ZDOC - TECNOLOGIA EM GESTÃO DOCUMENTAL",
      location: "ARACAJU, SERGIPE, BRASIL",
      period: "2024-02 - PRESENT",
      responsibilities: [
        "Led the development and infrastructure deployment of a full-stack project built with Next.js (frontend) and Spring Boot (backend).",
        "Designed and implemented the entire system architecture, including database modeling, API design, and application scalability.",
        "Developed high-performance, maintainable code, ensuring seamless integration between frontend and backend.",
        "Built and managed on-premises cloud infrastructure, optimizing resource allocation and system reliability.",
        "Automated deployment workflows with CI/CD pipelines, improving efficiency and reducing manual intervention.",
        "Ensured security, scalability, and performance across all layers of the system.",
      ],
      tags: ["Next.js", "Spring Boot", "DevOps", "Architecture", "CI/CD"],
    },
    {
      title: "Software Engineer II | DevOps | Cloud",
      company: "CHIP ARACAJU",
      location: "ARACAJU, SERGIPE, BRASIL",
      period: "2024-01 - PRESENT",
      responsibilities: [
        "Played a crucial role in the development of Codepusher, a CI/CD automation platform that simplifies project creation and deployment.",
        "Developed and optimized the backend using NestJS, ensuring scalability, security, and API performance.",
        "Built key components of the Next.js frontend, delivering an intuitive UI for seamless project management.",
        "Implemented Terraform/Tofu automation, enabling one-click infrastructure provisioning across AWS, Azure, and other cloud providers.",
        "Integrated GitHub API, automating repository creation with pre-configured project templates (Node.js, Python, etc.).",
        "Contributed to cloud infrastructure automation, improving deployment workflows and reducing manual configuration.",
      ],
      tags: ["NestJS", "Next.js", "Terraform", "AWS", "Azure", "GitHub API"],
    },
    {
      title: "Software Engineer | Cloud",
      company: "CHIP ARACAJU",
      location: "ARACAJU, SERGIPE, BRASIL",
      period: "2023-07 - 2023-12",
      responsibilities: [
        "Solely responsible for the development and deployment of the ChipCia website.",
        "Built a modern, responsive web platform using React.js and TypeScript.",
        "Ensured high performance and scalability, aligning the project with the company's goals.",
        "Managed hosting and infrastructure, ensuring a stable and efficient online presence.",
      ],
      tags: ["React.js", "TypeScript", "Web Development", "Infrastructure"],
    },
    {
      title: "Senior Software Engineer | DevOps | Cloud",
      company: "AC CONSULTORIA",
      location: "ARACAJU, SERGIPE, BRASIL",
      period: "2023-05 - PRESENT",
      responsibilities: [
        "Solely responsible for the entire system lifecycle, from architecture and development to deployment and maintenance.",
        "Migrated the infrastructure from AWS to Hostinger, reducing operational costs while maintaining high availability.",
        "Improved deployment pipelines, ensuring faster rollouts with enhanced rollback strategies.",
        "Strengthened system security and performance, refining database queries and backend optimizations.",
        "Provided technical guidance and best practices, driving overall system improvement.",
      ],
      tags: ["System Architecture", "AWS", "Hostinger", "DevOps", "Performance"],
    },
    {
      title: "Software Engineer | DevOps | Cloud",
      company: "AC CONSULTORIA",
      location: "ARACAJU, SERGIPE, BRASIL",
      period: "2020-03 - 2023-05",
      responsibilities: [
        "Led the development and deployment of the company's data management system, ensuring stability and scalability.",
        "Designed and implemented dashboards, reports, and management tools to enhance operational efficiency.",
        "Managed AWS-based infrastructure, optimizing performance and reliability.",
        "Automated CI/CD pipelines with GitHub Actions and Docker, reducing deployment time.",
        "Optimized PostgreSQL queries, improving database performance and response time.",
      ],
      tags: ["Data Management", "AWS", "GitHub Actions", "Docker", "PostgreSQL"],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha da timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-16 md:mb-28 ${
                index % 2 === 0 
                  ? "md:pr-16 md:text-right md:ml-auto md:mr-1/2" 
                  : "md:pl-16 md:ml-1/2"
              }`}
            >
              {/* Ponto da timeline com efeito de pulsação */}
              <div className="absolute left-4 md:left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping"></div>
              </div>

              <div 
                className={`
                  bg-card border border-border/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                  p-6 md:p-8 relative overflow-hidden group
                  ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"}
                  ml-10 md:ml-auto
                `}
              >
                {/* Accent decorativo */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <div className={`
                    flex flex-col md:flex-row items-start gap-3 text-muted-foreground mb-6
                    ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}
                  `}>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className={`
                          flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200
                          ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}
                        `}
                      >
                        {/* Substituindo a seta por um ponto */}
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p>{resp}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className={`mt-6 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="outline"
                        className="bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
