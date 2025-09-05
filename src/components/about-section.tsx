import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Wrench } from "lucide-react"

export function AboutSection() {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-accent" />,
      title: "Design",
      description:
        "Creating beautiful and intuitive user interfaces with modern design principles and user experience best practices.",
    },
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Development",
      description:
        "Building responsive web applications using cutting-edge technologies like React, Next.js, and TypeScript.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Maintenance",
      description:
        "Providing ongoing support, updates, and optimization to keep your web applications running smoothly.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            I'm a passionate freelance web developer with expertise in modern web technologies. I help businesses and
            individuals bring their digital ideas to life through clean, efficient, and user-friendly web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-balance">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
