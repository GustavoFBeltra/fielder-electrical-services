'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Start exit animation after logo reveal
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 2000)

    // Remove loading screen completely
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary-50" />

      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/5 animate-ping"
          style={{ animationDuration: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary-500/5 animate-ping"
          style={{ animationDuration: '2s', animationDelay: '0.3s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-primary-500/10 animate-ping"
          style={{ animationDuration: '2s', animationDelay: '0.6s' }}
        />
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center mt-20">
        {/* Logo reveal */}
        <div className="relative overflow-hidden">
          {/* Reveal mask */}
          <div
            className="animate-logo-reveal"
            style={{
              animation: 'logoReveal 1.2s ease-out 0.3s forwards',
            }}
          >
            <Image
              src="/logo.png"
              alt="Fielder Electrical Services"
              width={600}
              height={180}
              className="h-40 md:h-56 w-auto"
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <div
          className="mt-6 overflow-hidden"
          style={{
            animation: 'fadeInUp 0.6s ease-out 1s forwards',
            opacity: 0,
          }}
        >
          <p className="text-dark-500 text-lg font-medium tracking-wide">
            Professional Electrical Services
          </p>
        </div>

        {/* Loading bar */}
        <div
          className="mt-8 w-48 h-1 bg-dark-100 rounded-full overflow-hidden"
          style={{
            animation: 'fadeIn 0.3s ease-out 0.5s forwards',
            opacity: 0,
          }}
        >
          <div
            className="h-full bg-primary-500 rounded-full"
            style={{
              animation: 'loadingBar 1.5s ease-in-out 0.5s forwards',
              width: '0%',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes logoReveal {
          0% {
            clip-path: inset(0 100% 0 0);
            transform: scale(0.9);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0% 0 0);
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
