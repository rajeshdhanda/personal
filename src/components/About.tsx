'use client'

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          About Myself
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-red-500 mr-2">❤️</span>
                My Honest Introduction
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                Hey, nice to connect with you! 😊
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                I'm genuinely looking for a life partner—no casual or short-term intentions. 
                Where I settle after marriage will depend on mutual understanding.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Also, just to be transparent—I don't come from a strong financial or family background. 
                If that's a concern and you'd like to step back, I completely respect your decision.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-green-500 mr-2">📍</span>
                Location & Work
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                🏠 Based in Haryana ( Hybrid Work )
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                ✈️ Visit Bangalore every 1-2 months for 2 weeks
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                📦 Also, I am planning to shift to Bangalore soon.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                💼 Machine Learning Engineer in a MNC 
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
