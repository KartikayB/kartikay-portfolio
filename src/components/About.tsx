'use client';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-geist">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">&lt;</span>
          About Me
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">/&gt;</span>
        </h2>

        {/* Terminal-style container */}
        <div className="bg-[#1a1a1a]/80 rounded-2xl p-6 backdrop-blur-sm border border-blue-500/20 shadow-2xl">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-500/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="font-geist-mono text-sm text-gray-400">kartikay@portfolio ~ /about</span>
            </div>
          </div>

          {/* Content with typing animation */}
          <div className="space-y-4 font-geist text-gray-300">
            <div className="flex items-start space-x-2">
              <span className="text-blue-400">$</span>
              <div className="flex-1">
                <span className="text-green-400">whoami</span>
                <div className="mt-2 leading-relaxed">
                  I&apos;m a <span className="text-blue-400">Data Engineer</span> and <span className="text-cyan-400">Backend Developer</span> with 3+ years of experience building scalable data pipelines, APIs, and cloud-native applications. 
                  <div className="inline-flex items-center">
                    <span className="font-geist-mono text-blue-300">Core Stack: </span>
                    <div className="ml-2 flex gap-2">
                      {['Python', 'FastAPI', 'SQL', 'AWS', 'Kafka'].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md bg-blue-500/10 text-sm font-geist-mono text-blue-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-blue-400">$</span>
              <div className="flex-1">
                <span className="text-green-400">cat skills.txt</span>
                <div className="mt-2 leading-relaxed">
                  <div className="mb-4">
                    Designed and implemented:
                    <ul className="list-none space-y-2 mt-2">
                      {[
                        'ETL workflows using PySpark & AWS Glue',
                        'Real-time data ingestion systems',
                        'Analytics platforms with Docker containerization',
                        'CI/CD pipelines for automated deployments'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-blue-400">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-blue-400">$</span>
              <div className="flex-1">
                <span className="text-green-400">cat expertise.md</span>
                <div className="mt-2 leading-relaxed">
                  Blending <span className="text-purple-400">software engineering</span> with <span className="text-cyan-400">data science</span>, I specialize in transforming raw, high-volume datasets into reliable, actionable insights. My experience spans the entire data lifecycle—from ingestion and transformation to serving ML-ready features.
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-blue-400">$</span>
              <div className="flex-1">
                <span className="text-green-400">echo $PASSION</span>
                <div className="mt-2 leading-relaxed flex items-center">
                  <span>Passionate about architecting resilient systems</span>
                  <div className="relative ml-2 font-geist-mono text-blue-300">
                    <span className="typing-text">
                      ...
                      <span className="inline-block w-2 h-4 ml-1 bg-blue-400 animate-pulse">_</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Currently exploring section */}
            <div className="mt-4 p-4 bg-blue-500/5 rounded-lg border border-blue-500/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="font-geist-mono text-sm text-blue-300">Currently exploring:</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {['AI/ML', 'MLOps', 'Vector Databases', 'Real-time Analytics', 'Cloud-native Architecture'].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-sm font-geist-mono text-blue-300 border border-blue-500/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 