import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Analytics Platform",
    description:
      "Comprehensive dashboard for tracking sales, inventory, and customer analytics with real-time data visualization and reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Project Management Suite",
    description:
      "Collaborative project management tool with kanban boards, time tracking, and team collaboration features for enhanced productivity.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "Social Learning Platform",
    description:
      "Educational social network connecting learners and educators with interactive courses, live sessions, and community features.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "GraphQL", "Redis", "Docker"],
  },
  {
    title: "FinTech Analytics Dashboard",
    description:
      "Comprehensive financial analytics platform with portfolio tracking, market insights, and risk assessment tools for investors.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["TypeScript", "Python", "TensorFlow", "Kubernetes"],
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records with HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
  },
  {
    title: "Real Estate Marketplace",
    description:
      "Modern real estate platform with virtual tours, AI-powered property recommendations, and integrated mortgage calculator.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Prisma", "Stripe", "Mapbox"],
  },
];

export default function ProjectsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A selection of projects that showcase my expertise and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card glass-effect rounded-xl overflow-hidden group transition-all duration-1000 ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={project.image}
                alt={`${project.title} Project`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-50">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </button>
                  <button className="text-slate-400 hover:text-slate-300 transition-colors duration-300 flex items-center">
                    <Github className="mr-2" size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass-effect px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center">
            <Github className="mr-2" size={20} />
            View More on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
