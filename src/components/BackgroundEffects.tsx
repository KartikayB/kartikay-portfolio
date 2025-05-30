'use client';
import React, { useState, useEffect } from 'react';

interface DataPoint {
  id: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
}

interface Stream {
  id: number;
  left: string;
  delay: string;
}

export default function BackgroundEffects() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [streams, setStreams] = useState<Stream[]>([]);

  useEffect(() => {
    // Generate data points on client side
    setDataPoints(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`
    })));

    // Generate streams on client side
    setStreams(Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${(i + 1) * 12.5}%`,
      delay: `${i * 0.5}s`
    })));
  }, []);

  return (
    <>
      {/* Neural Network Background Layer */}
      <div className="fixed inset-0 -z-30 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {/* Neural network nodes */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(96, 165, 250, 0.25) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Data Flow Layer */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        {/* Vertical data streams */}
        {streams.map(stream => (
          <div
            key={stream.id}
            className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-400/15 to-transparent animate-data-flow"
            style={{
              left: stream.left,
              animationDelay: stream.delay,
              animationDuration: '4s'
            }}
          />
        ))}

        {/* Binary rain effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='12' fill='%233b82f6' text-anchor='middle' dominant-baseline='middle'%3E01%3C/text%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Gradient Overlay Layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/10 via-purple-800/5 to-blue-800/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        
        {/* Data pipeline grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      </div>

      {/* Floating Data Points */}
      <div className="fixed inset-0 pointer-events-none">
        {dataPoints.map(point => (
          <div
            key={point.id}
            className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              top: point.top,
              left: point.left,
              animationDelay: point.delay,
              animationDuration: point.duration,
              boxShadow: '0 0 8px rgba(96, 165, 250, 0.3)'
            }}
          />
        ))}
      </div>

      {/* Additional Accent Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-blue-500/20 via-transparent to-transparent transform -skew-x-12" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-blue-500/20 via-transparent to-transparent transform skew-x-12" />
      </div>
    </>
  );
} 