import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2021 - Present",
    description:
      "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions for 1M+ users.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    color: "indigo",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple client applications using modern JavaScript frameworks. Improved application performance by 40% through code optimization and best practices.",
    technologies: ["Vue.js", "Express", "MongoDB", "Redis"],
    color: "purple",
  },
  {
    title: "Frontend Developer",
    company: "StartupHub",
    period: "2015 - 2018",
    description:
      "Built responsive web applications and mobile-first interfaces. Collaborated with UX/UI designers to implement pixel-perfect designs and enhance user experience.",
    technologies: ["JavaScript", "SASS", "Angular", "MySQL"],
    color: "cyan",
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2014 - 2015",
    description:
      "Started my professional journey building websites and learning the fundamentals of web development. Gained experience in HTML, CSS, JavaScript, and basic backend technologies.",
    technologies: ["HTML5", "CSS3", "jQuery", "PHP"],
    color: "emerald",
  },
];

export default function ExperienceSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Career Journey</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A decade of innovation, growth, and technological evolution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-cyan-500"></div>

            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative pl-20 pb-12 transition-all duration-1000 ${
                  isIntersecting
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`absolute left-6 w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-slate-900`}></div>
                <div className="glass-effect rounded-xl p-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-50 mb-2">{exp.title}</h3>
                      <h4 className={`text-${exp.color}-400 font-medium mb-2`}>{exp.company}</h4>
                    </div>
                    <span className="text-cyan-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`bg-${exp.color}-500/20 text-${exp.color}-300 px-3 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
