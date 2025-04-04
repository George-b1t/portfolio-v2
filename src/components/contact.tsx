"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, User, MessageSquare, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast("Message sent!", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "george.soares509@gmail.com",
      href: "mailto:george.soares509@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+55 (79) 998536329",
      href: "tel:+5579998536329",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "Aracaju, Sergipe, Brasil",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/george-soares-cj",
      href: "https://www.linkedin.com/in/george-soares-cj/",
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      label: "GitHub",
      value: "github.com/George-b1t",
      href: "https://github.com/George-b1t",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
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
            Get In Touch
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mb-6"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Feel free to reach out if you{"'"}re looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full border border-border/30 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
                <h3 className="text-2xl font-bold relative z-10">Contact Information</h3>
                <p className="text-primary-foreground/80 mt-2 relative z-10">
                  Let{"'"}s connect and discuss your project or opportunities.
                </p>
              </div>

              <CardContent className="p-6">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={
                                info.href.startsWith("mailto:") || info.href.startsWith("tel:") ? undefined : "_blank"
                              }
                              rel="noopener noreferrer"
                              className="font-medium hover:text-primary transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-6 border-t"
                >
                  <p className="text-muted-foreground mb-4">
                    I{"'"}m always open to discussing new projects, opportunities, or partnerships.
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-primary/20 text-primary hover:bg-primary/10 hover:text-primary"
                      onClick={() => window.open("https://www.linkedin.com/in/george-soares-cj/", "_blank")}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-primary/20 text-primary hover:bg-primary/10 hover:text-primary"
                      onClick={() => window.open("https://github.com/George-b1t", "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="border border-border/30 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 border-b border-border/20 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full"></div>
                <h3 className="text-2xl font-bold relative z-10">Send Me a Message</h3>
                <p className="text-muted-foreground mt-2 relative z-10">I{"'"}ll get back to you as soon as possible.</p>
              </div>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="space-y-2 relative"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="text-sm font-medium flex items-center">
                        <User className="h-4 w-4 mr-2 text-primary" />
                        Name
                      </label>
                      <div className={`relative ${focusedField === "name" ? "ring-2 ring-primary/20 rounded-md" : ""}`}>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your name"
                          className="border-border/30 focus-visible:ring-primary/30"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-2 relative"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="text-sm font-medium flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        Email
                      </label>
                      <div
                        className={`relative ${focusedField === "email" ? "ring-2 ring-primary/20 rounded-md" : ""}`}
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your email"
                          className="border-border/30 focus-visible:ring-primary/30"
                          required
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2 relative"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="text-sm font-medium flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                      Subject
                    </label>
                    <div
                      className={`relative ${focusedField === "subject" ? "ring-2 ring-primary/20 rounded-md" : ""}`}
                    >
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Subject"
                        className="border-border/30 focus-visible:ring-primary/30"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-2 relative"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="text-sm font-medium flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                      Message
                    </label>
                    <div
                      className={`relative ${focusedField === "message" ? "ring-2 ring-primary/20 rounded-md" : ""}`}
                    >
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your message"
                        rows={6}
                        className="resize-none border-border/30 focus-visible:ring-primary/30"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full rounded-full py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center text-lg">
                          <Send className="mr-2 h-5 w-5" /> Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

