"use client"

import { motion, Variants } from "framer-motion"
import { Code, Server, Cloud, Database, GitBranch, Shield, Users, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-10 w-10 text-primary" />,
      items: ["TypeScript", "JavaScript", "Python", "Golang", "Java"],
      color: "from-blue-500/20 to-blue-600/5",
      delay: 0,
    },
    {
      category: "Frontend",
      icon: <Zap className="h-10 w-10 text-primary" />,
      items: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS", "Flutter"],
      color: "from-purple-500/20 to-purple-600/5",
      delay: 0.1,
    },
    {
      category: "Backend",
      icon: <Server className="h-10 w-10 text-primary" />,
      items: ["Node.js", "NestJS", "Spring Boot", "Express.js", "REST APIs"],
      color: "from-green-500/20 to-green-600/5",
      delay: 0.2,
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="h-10 w-10 text-primary" />,
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      color: "from-cyan-500/20 to-cyan-600/5",
      delay: 0.3,
    },
    {
      category: "Databases",
      icon: <Database className="h-10 w-10 text-primary" />,
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      color: "from-amber-500/20 to-amber-600/5",
      delay: 0.4,
    },
    {
      category: "DevOps",
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      items: ["GitHub Actions", "ArgoCD", "Jenkins", "Monitoring", "Logging"],
      color: "from-red-500/20 to-red-600/5",
      delay: 0.5,
    },
    {
      category: "Security",
      icon: <Shield className="h-10 w-10 text-primary" />,
      items: ["OAuth", "JWT", "HTTPS", "Security Best Practices"],
      color: "from-emerald-500/20 to-emerald-600/5",
      delay: 0.6,
    },
    {
      category: "Soft Skills",
      icon: <Users className="h-10 w-10 text-primary" />,
      items: ["Teamwork", "Communication", "Problem Solving", "Mentoring"],
      color: "from-indigo-500/20 to-indigo-600/5",
      delay: 0.7,
    },
  ]

  // Animation variants para itens internos
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical capabilities and professional competencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: skill.delay }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl border border-border/30 shadow-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Cabeçalho do cartão com gradiente */}
              <div className={`bg-gradient-to-br ${skill.color} p-6 border-b border-border/20 relative`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full"></div>
                <div className="flex items-center">
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">{skill.icon}</div>
                  <h3 className="text-xl font-bold ml-4">{skill.category}</h3>
                </div>
              </div>

              {/* Conteúdo do cartão */}
              <div className="p-6">
                <motion.ul
                  className="space-y-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {skill.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={container}
                      className="flex items-center group"
                    >
                      <div className="relative">
                        <div className="h-2.5 w-2.5 rounded-full bg-primary transition-colors duration-300 group-hover:bg-primary/70"></div>
                        <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-primary/50 animate-ping opacity-0 group-hover:opacity-100"></div>
                      </div>
                      <span className="ml-3 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Rodapé do cartão */}
              <div className="px-6 pb-6 pt-2">
                <Badge
                  variant="outline"
                  className={`bg-${skill.color.split("-")[1]}-500/10 border-${skill.color.split("-")[1]}-500/20 text-${skill.color.split("-")[1]}-700 dark:text-${skill.color.split("-")[1]}-300`}
                >
                  {skill.items.length} skills
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resumo de skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-transparent p-8 rounded-2xl border border-primary/20 max-w-3xl mx-auto">
            <p className="text-lg text-foreground">
              With a diverse skill set spanning multiple technologies and domains, I bring a holistic approach to
              software development and infrastructure management. I{"'"}m constantly learning and adapting to new
              technologies to deliver the best solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
