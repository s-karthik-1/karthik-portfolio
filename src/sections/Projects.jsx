import { ArrowUpRight, Workflow } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Stone-Age",
    description:
      "A modern and responsive food ordering website that allows users to explore food categories, browse dishes, create an account, and discover their favorite meals through a simple and user-friendly interface.",
    image: "/Projects/Stone-Age.jpg",
    tags: ["React", "ExpressJS", "NodeJS", "MongoDB"],
    github: "https://github.com/RISKY-MAM/SF-Project-Stone-Age.git",
  },
  {
    title: "D&D Fashions",
    description:
      "A modern e-commerce website designed to provide a seamless online shopping experience. Users can browse clothing and accessories, search and filter products, manage their shopping cart, and complete the checkout process through a user-friendly and responsive interface.",
    image: "/Projects/D&D-Fashions.jpg",
    tags: ["HTML", "CSS", "MySQL", "JavaScript"],
    github: "https://github.com/Laseyaa/Clothing-Website.git",
  },
  {
    title: "ARNGREN",
    description:
      "A modern e-commerce UI/UX design created in Figma for browsing and purchasing drones, robotics, RC vehicles, and tech gadgets. The design includes product categories, search and filtering, product details, cart management, checkout, and user authentication with a clean and intuitive shopping experience.",
    image: "/Projects/ARNGREN.jpg",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    prototype: "https://www.figma.com/proto/E5u8HdEHXJQB3xNM7n1fHC/HCI-Redesign-Project?page-id=0%3A1&node-id=2-11&p=f&viewport=-13%2C-317%2C0.23&t=Ke1gQQjieI0kUNhb-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A11"
  },
  {
    title: "Housify",
    description:
      "A MERN stack application that helps families plan and budget their dream homes through detailed cost estimates, location-based advice, and a phased construction roadmap. It provides a simple dashboard for managing construction budgets and planning projects efficiently.",
    image: "/Projects/Housify.jpg",
    tags: ["React", "ExpressJS", "NodeJS", "MongoDB"],
    github: "https://github.com/s-karthik-1/Housify---affordable-housing-planner.git",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const hasMoreProjects = projects.length > 2;
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const toggleProjects = () => setShowAll((prev) => !prev);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              onClick={toggleProjects}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 cursor-pointer"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label={`Open GitHub for ${project.title}`}
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}

                  {project.prototype && (
                    <a
                      href={project.prototype}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label={`Open Figma prototype for ${project.title}`}
                    >
                      <Workflow className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton type="button" onClick={toggleProjects}>
              {showAll ? "Show Less Projects" : "View All Projects"}
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        )}
      </div>
    </section>
  );
};