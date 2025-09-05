"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl text-muted-foreground mb-2">Hi, I am</h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mb-4 text-balance">
              Willy Raka Raymond
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground mb-8 text-balance">
              Freelance Web Developer - Remote
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="https://github.com/1rakaraymond-dot" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="https://www.linkedin.com/in/raka-raymond" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="mailto:2rakaraymond@Gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
