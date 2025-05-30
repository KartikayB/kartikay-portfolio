import React from 'react';

const projects = [
  {
    title: "Safest Route Suggestion",
    subtitle: "Data-Driven Safety Navigation",
    description: "Developed an innovative solution that recommends the safest route between two locations by analyzing crime data and implementing advanced routing algorithms. The system provides real-time safe route suggestions to help users navigate through high-risk areas more securely.",
    technologies: [
      "Python",
      "FastAPI",
      "Here Maps API",
      "Data Analysis",
      "Routing Algorithms",
      "Geospatial Data"
    ],
    link: "https://ishaputhige.github.io/SafestRouteFinder/",
    github: "https://github.com/ishaputhige/SafestRouteFinder",
    image: "/projects/safest-route.png"
  },
  {
    title: "Virtual Labs - Flow Control Protocols",
    subtitle: "Interactive Learning Platform",
    description: "Collaborated with IIT Roorkee to create an interactive virtual lab focused on Flow Control Protocols. This web-based learning platform helps students visualize and understand complex networking concepts through hands-on simulations and interactive experiments.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Network Protocols",
      "Interactive Simulations",
      "Educational Tech"
    ],
    link: "https://sahilcode17.github.io/vlab/",
    github: "https://github.com/sahilcode17/vlab",
    image: "/projects/vlab.png"
  },
  {
    title: "Babble",
    subtitle: "Special Needs Therapy Platform",
    description: "Designed and developed a comprehensive website for a newly established organization providing specialized treatments and therapy services for children with special needs. The platform features an intuitive interface to help families easily access and engage with various therapy services.",
    technologies: [
      "React",
      "Responsive Design",
      "Accessibility",
      "UI/UX",
      "Bootstrap",
      "Healthcare Tech"
    ],
    link: "https://kartikayb.github.io/Babble/",
    github: "https://github.com/KartikayB/Babble",
    image: "/projects/babble.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-geist">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">&lt;</span>
          Projects
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">/&gt;</span>
        </h2>

        <p className="text-gray-400 text-center mb-12 font-geist text-sm">
          Building solutions that transform data into impact
        </p>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-[#1a1a1a]/80 rounded-xl p-8 backdrop-blur-sm border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
            >
              {/* Data Flow Background Effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-10">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-2000"
                      style={{
                        top: `${(i + 1) * 25}%`,
                        transitionDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                  <h3 className="text-xl font-bold text-blue-400 font-geist group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-geist-mono">{project.subtitle}</p>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-geist-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    <span className="font-geist-mono text-sm">Live Demo</span>
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>

                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors group/github"
                  >
                    <span className="font-geist-mono text-sm">Source Code</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 