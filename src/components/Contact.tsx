import React from 'react';

const socialLinks = [
  {
    name: 'Email',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: 'mailto:kartikay.bansal2014@gmail.com',
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'group-hover:from-blue-600 group-hover:to-cyan-600'
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: 'https://www.linkedin.com/in/kartikay-bansal-036813173/',
    color: 'from-[#0077b5] to-[#00a0dc]',
    hoverColor: 'group-hover:from-[#006396] group-hover:to-[#0077b5]'
  },
  {
    name: 'GitHub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    href: 'https://github.com/KartikayB',
    color: 'from-gray-700 to-gray-900',
    hoverColor: 'group-hover:from-gray-800 group-hover:to-black'
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    href: 'https://www.instagram.com/bansalkartikay/',
    color: 'from-[#833AB4] to-[#FD1D1D]',
    hoverColor: 'group-hover:from-[#405DE6] group-hover:to-[#E1306C]'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-geist">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">&lt;</span>
          Initialize Connection
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">/&gt;</span>
        </h2>

        <p className="text-gray-400 text-center mb-12 font-geist text-sm">
          Let&apos;s collaborate and build something amazing together
        </p>

        <div className="relative">
          {/* Data Flow Background */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-data-flow"
                  style={{
                    top: `${(i + 1) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#1a1a1a]/80 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20 relative">
            {/* Terminal-style header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-blue-500/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="font-geist-mono text-sm text-gray-400">kartikay@portfolio ~ /contact</span>
              </div>
            </div>

            {/* Connection Message */}
            <div className="mb-8 font-geist-mono text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <span className="animate-pulse">▶</span>
                <span>Establishing connection...</span>
              </div>
              <div className="mt-2 text-blue-300">
                Ready to connect! Choose your preferred communication channel:
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl p-4 transition-all duration-300"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`} />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.color} ${link.hoverColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="absolute inset-[1px] bg-[#1a1a1a] rounded-xl" />
                  </div>

                  {/* Content */}
                  <div className="relative flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${link.color} ${link.hoverColor}`}>
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-geist-mono text-white group-hover:text-blue-300 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-geist-mono">Connect via {link.name}</p>
                    </div>
                    <svg 
                      className="w-5 h-5 ml-auto text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Status Indicators */}
            <div className="mt-8 flex items-center justify-between text-xs font-geist-mono text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Online & Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Response Time: ~24h</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 