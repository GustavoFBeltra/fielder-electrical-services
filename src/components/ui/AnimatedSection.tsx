'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import clsx from 'clsx'

type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade'
  | 'scale'
  | 'bounce'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

const animationClasses: Record<AnimationType, string> = {
  'fade-up': 'animate-fade-in-up',
  'fade-down': 'animate-fade-in-down',
  'fade-left': 'animate-fade-in-left',
  'fade-right': 'animate-fade-in-right',
  'fade': 'animate-fade-in',
  'scale': 'animate-scale-in',
  'bounce': 'animate-bounce-in',
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        isVisible ? animationClasses[animation] : 'opacity-0'
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
