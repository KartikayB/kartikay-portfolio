'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = ['about', 'skills-and-experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="group flex items-center space-x-2 text-white hover:text-blue-400 transition-all duration-300"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300">
                  <span className="font-bold text-lg">KB</span>
                </div>
                <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm group-hover:bg-blue-500/30 transition-all duration-300" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-mono text-sm tracking-wide">kartikay.dev</span>
                <span className="text-xs text-blue-400/80">&lt;software_engineer /&gt;</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {['About', 'Skills & Experience', 'Projects', 'Contact'].map((item) => {
                const isActive = activeSection === item.toLowerCase().replace(/ & /g, '-and-');
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ & /g, '-and-')}`}
                    className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 relative group ${
                      isActive 
                        ? 'text-blue-400' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {/* Data Pipeline Background */}
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                      {/* Animated data flow lines */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          style={{ 
                            top: `${(i + 1) * 33}%`,
                            transitionDelay: `${i * 200}ms`
                          }}
                        />
                      ))}
                      {/* Database-like structure */}
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Active Tab Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-[#1a1a1a] border border-blue-500/20 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Tab Content */}
                    <div className="relative z-10 flex items-center gap-1.5">
                      {/* Icon based on section */}
                      <span className="text-blue-400/70">
                        {item === 'About' && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                        {item === 'Skills & Experience' && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        )}
                        {item === 'Projects' && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                        {item === 'Contact' && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                      </span>
                      
                      {/* Tab Text */}
                      <span className="font-mono relative">
                        <span className="relative z-10">{item}</span>
                        {/* Hover highlight effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      </span>

                      {/* Data points decoration */}
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                        <div className="w-1 h-1 rounded-full bg-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                        <div className="w-1 h-1 rounded-full bg-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden relative group">
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                  <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                  <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header; 