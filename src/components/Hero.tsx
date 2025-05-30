'use client';
import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src={getAssetPath('/profile.jpg')}
                alt="Kartikay Bansal"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-gray-500 to-gray-500 rounded-full blur opacity-10" />
          </div>

          {/* Name and Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text font-geist">
              Kartikay Bansal
            </h1>
            <div className="relative">
              <p className="text-xl md:text-2xl text-blue-200 font-light tracking-wide font-geist-mono">
                Turning raw data into real-world impact
              </p>
              <p className="text-lg text-blue-300/80 font-light mt-2 font-geist-mono">
                with clean code and scalable systems
              </p>
            </div>
          </div>

          {/* Brief Introduction */}
          <div className="mt-8 mb-10">
            <p className="max-w-2xl text-gray-300 text-lg leading-relaxed font-geist">
              Bridging{' '}
              <span className="text-blue-300">Data Engineering</span>,{' '}
              <span className="text-purple-300">Software Development</span>, and{' '}
              <span className="text-cyan-300">Data Science</span>{' '}
              to build intelligent, scalable systems that deliver real value.
            </p>
          </div>

          {/* Call to Action Buttons with data engineering theme */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={getAssetPath('/Kartikay_Bansal_CV.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 bg-[#1a1a1a] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden border border-blue-500/20"
            >
              {/* Database-inspired decoration */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
                <div className="h-full w-full flex flex-col justify-between py-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }} />
                  ))}
                </div>
              </div>
              
              {/* Icon and text */}
              <div className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <span className="font-geist-mono text-sm tracking-wide">Download CV</span>
                <div className="absolute right-0 w-8 h-full bg-gradient-to-r from-transparent to-blue-500/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </div>
            </a>

            <a 
              href="#contact" 
              className="group relative px-8 py-3 bg-transparent text-white rounded-lg font-medium transition-all duration-300 overflow-hidden border border-gray-700 hover:border-blue-500/50"
            >
              {/* Pipeline-inspired decoration */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-full w-full">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" 
                      style={{ 
                        top: `${(i + 1) * 25}%`,
                        transitionDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Icon and text */}
              <div className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-geist-mono text-sm tracking-wide">Initialize Connection</span>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex gap-6">
            <a href="https://github.com/KartikayB" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/kartikay-bansal-036813173/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/bansalkartikay/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;