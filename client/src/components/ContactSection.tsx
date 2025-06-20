import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.thompson@email.com",
      color: "indigo",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      color: "cyan",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "indigo" },
    { icon: Github, href: "#", color: "purple" },
    { icon: Twitter, href: "#", color: "cyan" },
    { icon: Dribbble, href: "#", color: "emerald" },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Build Something Amazing</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? Let's discuss your next project and how we can create something extraordinary together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-50">Get In Touch</h3>
                <p className="text-slate-400 mb-8">
                  I'm always interested in new opportunities and exciting projects. Whether you're a company looking to hire, or you're a fellow developer who'd like to connect, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-${info.color}-500/20 rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`text-${info.color}-400`} size={20} />
                      </div>
                      <div>
                        <div className="text-slate-300 font-medium">{info.label}</div>
                        <div className="text-cyan-400">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-${social.color}-500/20 transition-colors duration-300`}
                    >
                      <IconComponent className={`text-slate-300 hover:text-${social.color}-400`} size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`glass-effect rounded-xl p-8 transition-all duration-1000 ${
                isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 focus:border-indigo-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 focus:border-indigo-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 focus:border-indigo-400 focus:outline-none transition-colors duration-300"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 focus:border-indigo-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
