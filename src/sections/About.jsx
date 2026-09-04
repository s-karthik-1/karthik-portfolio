import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Taking part in hackathons, buildathons, and algorithmic contests to sharpen how I think through problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Serving as Volunteer Co-Lead at Hackathon Hub, helping organize events for fellow student developers.",
  },
  {
    icon: Rocket,
    title: "Fast Adaptation",
    description:
      "Picking up new languages, frameworks, and tools quickly and applying them straight into real projects.",
  },
  {
    icon: Code2,
    title: "Solid Fundamentals",
    description:
      "Grounded in data structures, databases, and system design — the base that makes new tech easier to pick up.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building with
              <span className="font-serif italic font-normal text-white">
                {" "}
                purpose and precision.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a third-year Computer Science undergraduate at NSBM Green
                University, working toward a career in full-stack
                development. My focus is on React, Node.js, and SQL
                databases, and I build real, end-to-end projects — from
                e-commerce interfaces to food-ordering platforms — to turn
                that focus into practical experience.
              </p>
              <p>
                I adapt quickly to new languages, frameworks, and tools, and
                I actively seek out whatever technology a project calls for
                rather than staying inside one comfort zone. Alongside
                coursework, I compete in algorithmic contests like
                MoraXtreme, and serve as a Volunteer Co-Lead at Hackathon Hub,
                supporting hackathon events for other student developers.
              </p>
              <p>
                I'm driven by a genuine eagerness to keep expanding what I
                can build — the next tool or framework is never a barrier,
                it's the next thing to master.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I don't just want to finish a project — I want to understand
                every layer well enough to explain, defend, and improve it."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};