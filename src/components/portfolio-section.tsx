import { Card, CardContent } from "@/components/ui/card"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern e-commerce solution built with Next.js and Stripe integration for seamless online shopping experience.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with smooth animations and modern design.",
      image: "/creative-portfolio-website.png",
      technologies: ["React", "Framer Motion", "CSS3", "Netlify"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A comprehensive weather application with location-based forecasts and interactive weather maps.",
      image: "/weather-dashboard-interface.png",
      technologies: ["Vue.js", "Weather API", "Chart.js", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Platform",
      description: "A full-featured blogging platform with content management system and SEO optimization.",
      image: "/blog-platform-cms-interface.jpg",
      technologies: ["Next.js", "Sanity CMS", "Vercel", "SEO"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Website",
      description: "An elegant restaurant website with online reservation system and menu management.",
      image: "/restaurant-website.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "Booking API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-balance">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-balance">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
