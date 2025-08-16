'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300">
              Rajesh Dhanda
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link href="/" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Home
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                About
              </Link>
              <Link href="/#personality" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Personality
              </Link>
              <Link href="/#lifestyle" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Lifestyle
              </Link>
              <Link href="/#dating-intentions" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Intentions
              </Link>
              <Link href="/#compatibility" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Compatibility
              </Link>
              <Link href="/bucket-list" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                Bucket List
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-3 pt-3 pb-4 space-y-1 bg-gray-900/98 backdrop-blur-lg border-t border-gray-700 shadow-lg max-h-screen overflow-y-auto">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              🏠 Home
            </Link>
            <Link 
              href="/#about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              😊 About
            </Link>
            <Link 
              href="/#personality" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              🧠 Personality
            </Link>
            <Link 
              href="/#lifestyle" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              🌟 Lifestyle
            </Link>
            <Link 
              href="/#dating-intentions" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              💕 Intentions
            </Link>
            <Link 
              href="/#compatibility" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              💖 Compatibility
            </Link>
            <Link 
              href="/bucket-list" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            >
              📝 Bucket List
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
