import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect, useState } from "react";
import { Code, Server, Database, Figma, Cloud, Smartphone, GitBranch, FileCode } from "lucide-react";

const frontendSkills = [
  { name: "React.js", percentage: 95 },
  { name: "TypeScript", percentage: 90 },
  { name: "Vue.js", percentage: 85 },
  { name: "Tailwind CSS", percentage: 92 },
];

const backendSkills = [
  { name: "Node.js", percentage: 93 },
  { name: "Python", percentage: 88 },
  { name: "PostgreSQL", percentage: 87 },
  { name: "AWS", percentage: 85 },
];

const additionalSkills = [
  { name: "Docker", icon: FileCode },
  { name: "Git", icon: GitBranch },
  { name: "MongoDB", icon: Database },
  { name: "Figma", icon: Figma },
  { name: "CI/CD", icon: Cloud },
  { name: "React Native", icon: Smartphone },
];

export default function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    if (isIntersecting && !animateBars) {
      setTimeout(() => setAnimateBars(true), 500);
    }
  }, [isIntersecting, animateBars]);

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit built over a decade of continuous learning and hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <div
            className={`glass-effect rounded-xl p-8 transition-all duration-1000 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Code className="text-indigo-400 mr-3" size={24} />
              Frontend Development
            </h3>

            {frontendSkills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 rounded-full skill-bar-fill"
                    style={{ width: animateBars ? `${skill.percentage}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Backend Skills */}
          <div
            className={`glass-effect rounded-xl p-8 transition-all duration-1000 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Server className="text-purple-400 mr-3" size={24} />
              Backend Development
            </h3>

            {backendSkills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full skill-bar-fill"
                    style={{ width: animateBars ? `${skill.percentage}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {additionalSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className={`glass-effect rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <IconComponent className="text-3xl text-cyan-400 mb-2 w-8 h-8 mx-auto" />
                <div className="text-sm text-slate-300">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
