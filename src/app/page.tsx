'use client';
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Publications from '@/components/Publications';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated data flow lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-data-flow"
              style={{
                left: `${(i + 1) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4">
          <Hero />
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative overflow-hidden">
        {/* About Section */}
        <section id="about" className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <About />
            </div>
          </div>
        </section>

        {/* Skills & Experience Section */}
        <section id="skills-and-experience" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {/* Data pipeline effect */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-data-flow"
                style={{
                  top: `${(i + 1) * 25}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Experience />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-blue-900/5" />
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Projects />
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {/* Neural network grid effect */}
            <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-10">
              {[...Array(64)].map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-full bg-blue-500/20 animate-pulse"
                    style={{
                      animationDelay: `${(row * 0.1 + col * 0.1)}s`,
                      animationDuration: '3s'
                    }}
                  />
                );
              })}
            </div>
            {/* Connecting lines */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-data-flow"
                style={{
                  top: `${(i + 1) * 20}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Publications />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {/* Neural network connection lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse-glow"
                style={{
                  top: `${(i + 1) * 12.5}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Contact />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}