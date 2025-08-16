'use client'

export default function DatingIntentions() {
  return (
    <section id="dating-intentions" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          Dating Intentions & Relationship Goals
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-blue-500 mr-2 sm:mr-3">💍</span>
                Dating Intention: Life Partner
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                <strong>NO RUSH.</strong> Genuinely looking for life partner and believe in building 
                meaningful connection. I value getting to know someone gradually and building a strong foundation. 
                No rushing, just genuine connection and mutual understanding.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-green-500 mr-2 sm:mr-3">💚</span>
                Relationship Values
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                I believe in monogamous relationships built on mutual respect, 
                trust, and shared values. Quality over quantity in all aspects of life.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                What I'm Looking For
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2 sm:mr-3 mt-1">✨</span>
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base">Genuine Connection:</strong>
                    <p className="text-gray-700 text-sm sm:text-base">Someone who values authenticity over superficial attractions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 sm:mr-3 mt-1">🎯</span>
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base">Same Life Stage:</strong>
                    <p className="text-gray-700 text-sm sm:text-base">Ready for serious commitment and building a future together</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 sm:mr-3 mt-1">💬</span>
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base">Clear Communication:</strong>
                    <p className="text-gray-700 text-sm sm:text-base">Open dialogue about feelings, expectations, and future plans</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 sm:mr-3 mt-1">🤝</span>
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base">Mutual Effort:</strong>
                    <p className="text-gray-700 text-sm sm:text-base">Both partners equally invested in making the relationship work</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
