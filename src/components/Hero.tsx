'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAssetPath } from '../utils/assets'

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  const fullName = "Rajesh Dhanda"
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (isTyping && currentIndex < fullName.length) {
      // Typing each character
      timeoutId = setTimeout(() => {
        setDisplayedName(fullName.slice(0, currentIndex + 1))
        setCurrentIndex(prev => prev + 1)
      }, 150) // Slower typing for better effect
    } else if (isTyping && currentIndex >= fullName.length) {
      // Finished typing, wait then restart
      setShowCursor(false)
      timeoutId = setTimeout(() => {
        setCurrentIndex(0)
        setDisplayedName('')
        setIsTyping(true)
        setShowCursor(true)
      }, 3000) // Wait 3 seconds before restarting
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [currentIndex, isTyping, fullName])

  const renderName = () => {
    return (
      <span className="relative inline-block">
        <span className="text-blue-600 font-mono font-bold">
          {displayedName}
          {showCursor && <span className="animate-pulse text-blue-600">|</span>}
        </span>
      </span>
    )
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I&apos;m <span className="text-blue-600">{renderName()}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-3 sm:mt-4 font-medium">
              Looking for my life partner 💕
            </p>
            <p className="text-base sm:text-lg text-gray-600 mt-4 sm:mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              🚀 Machine Learning Engineer .<br />
              🏔️ Mountain lover & adventure seeker.<br />
              🤝 Believer in authentic, lasting relationships!
            </p>
            <div className="flex flex-col gap-3 mt-6 sm:mt-8 max-w-sm mx-auto lg:max-w-none lg:mx-0 sm:flex-row sm:max-w-none">
              <a 
                href="#about" 
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
              >
                Get to Know Me
              </a>
              <a 
                href="#dating-intentions" 
                className="border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center text-sm sm:text-base"
              >
                Dating Intentions
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center mb-4 lg:mb-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <div className="w-60 h-60 sm:w-[19rem] sm:h-[19rem] md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden relative">
                <Image
                  src={getAssetPath("/profile-picture.png")}
                  alt="Rajesh Dhanda - Looking for Life Partner"
                  width={416}
                  height={416}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
