import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Using Now",
      skills: [
        { name: "HTML5", color: "text-orange-500" },
        { name: "CSS3", color: "text-blue-500" },
        { name: "Sass", color: "text-pink-500" },
        { name: "JavaScript", color: "text-yellow-500" },
        { name: "React", color: "text-cyan-500" },
        { name: "Bootstrap", color: "text-purple-500" },
        { name: "Git", color: "text-red-500" },
        { name: "Figma", color: "text-purple-400" },
      ],
    },
    {
      title: "Learning",
      skills: [
        { name: "Node.js", color: "text-green-500" },
        { name: "MySQL", color: "text-blue-600" },
        { name: "MongoDB", color: "text-green-600" },
        { name: "TypeScript", color: "text-blue-500" },
      ],
    },
    {
      title: "Language",
      skills: [
        { name: "English", color: "text-blue-500" },
        { name: "Indonesia", color: "text-red-500" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-balance">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Here are the technologies and tools I work with to create amazing web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-center p-3 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                    >
                      <div className={`text-2xl mb-2 ${skill.color}`}>●</div>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
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
