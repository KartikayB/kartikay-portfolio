'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
  const publications = [
    {
      title: "Safest Route Detection via Danger Index Calculation and K-Means Clustering",
      journal: "CMC-Computers, Materials & Continua",
      date: "July 2021",
      doi: "10.32604/cmc.2021.018128",
      link: "https://www.techscience.com/cmc/v69n2/43879",
      description: "Research focused on developing an algorithm for identifying safe navigation routes using crime data analytics and K-Means clustering for crime hotspot detection.",
      highlights: [
        "Implemented K-Means clustering for crime pattern analysis",
        "Developed danger index calculation methodology",
        "International collaboration with researchers from Korea and Egypt",
        "Published in a peer-reviewed journal"
      ],
      metrics: {
        citations: 12,
        downloads: 2167,
        views: 2505
      }
    }
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-geist">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">&lt;</span>
          Publications
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">/&gt;</span>
        </h2>   
        </div>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Research contributions in data engineering, machine learning, and analytics
        </motion.p>
      </motion.div>

      <div className="space-y-12">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Background decoration */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
            
            {/* Main content */}
            <div className="relative bg-[#0c0c0c] border border-white/10 rounded-xl p-8 hover:border-blue-500/20 transition-colors duration-300">
              <a 
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Title with data flow decoration */}
                <div className="relative mb-4">
                  <h3 className="text-2xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {pub.title}
                  </h3>
                  {/* Animated data flow line */}
                  <div className="absolute -left-4 top-0 bottom-0 w-[2px] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-data-pulse" />
                  </div>
                </div>

                {/* Publication details */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                  <span className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-300">
                    {pub.journal}
                  </span>
                  <span className="text-gray-400">{pub.date}</span>
                  <span className="font-mono text-gray-500">DOI: {pub.doi}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {pub.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/30 rounded-lg border border-white/5">
                  {Object.entries(pub.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-semibold text-blue-400">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {pub.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 rounded-full text-sm border border-blue-500/10 hover:border-blue-500/20 transition-colors duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Publications; 