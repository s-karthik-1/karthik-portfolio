import {
  Code2,
  Server,
  Database,
  Layout,
  Terminal,
  Cpu,
  CheckCircle2,
  UsersRound,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Building responsive, modern user interfaces",
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Developing robust APIs and server-side logic",
    skills: ["Node.js (Basic)", "REST APIs"],
  },
  {
    title: "Database Technologies",
    icon: Database,
    description: "Managing relational & non-relational data",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "UI/UX Design",
    icon: Cpu,
    description: "Designing intuitive user experiences & systems",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design Systems",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Terminal,
    description: "Version control and development environments",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Core languages for software & system development",
    skills: ["JavaScript", "Java", "Python", "C"],
  },
  {
    title: "AI & Emerging Technologies",
    icon: Sparkles,
    description: "Using AI tools to enhance development and productivity",
    skills: ["Prompt Engineering", "AI-Assisted Development"],
  },
  {
    title: "Soft Skills",
    icon: UsersRound,
    description: "Collaborating effectively, solving problems, and adapting to new challenges",
    skills: ["Communication","Teamwork","Problem Solving","Leadership","Adaptability"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Proficiency
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills &amp;{" "}
            <span className="font-serif italic font-normal text-white">
              technologies.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A structured breakdown of my current capabilities across frontend,
            backend, databases, UI/UX design, and core programming languages.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground group-hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary opacity-70" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};