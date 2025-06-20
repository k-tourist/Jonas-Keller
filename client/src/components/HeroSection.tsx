import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className={`transition-all duration-1000 ${isIntersecting ? "animate-slide-up" : "opacity-0"}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient">Alex Thompson</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-slate-300 mb-8">
                Full Stack Developer
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl">
                Crafting exceptional digital experiences for 10+ years. Specialized in modern web technologies,
                scalable architectures, and user-centered design. Passionate about turning complex problems into
                elegant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  View My Work
                </button>
                <button className="glass-effect px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600"
                alt="Professional headshot of Alex Thompson"
                className="w-80 h-96 object-cover rounded-2xl glass-effect animate-float"
              />
              <div className="absolute -bottom-4 -right-4 glass-effect rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">10+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
