'use client'

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          What We Have in Common
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-green-600 mr-2">🚴‍♂️</span>
                Adventures & Travel
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>&bull; Biking adventures 🏍️</li>
                <li>&bull; Cherish solo wanderings 🚶‍♂️</li>
                <li>&bull; Trekking through Himalaya 🏔️</li>
                <li>&bull; Love being close to nature 🏕️</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-blue-600 mr-2">💼</span>
                Work Style
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>&bull; Little workaholic by nature</li>
                <li>&bull; Love automating boring stuff</li>
                <li>&bull; Believe in earning and building together</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-purple-600 mr-2">🗣️</span>
                My Communication Approach
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>&bull; Direct and transparent conversations matter.</li>
                <li>&bull; WhatsApp only - I don't have any Instagram or Snapchat accounts</li>
                <li>&bull; Not a fan of chats, typing long messages irritating and exhausting. Value face-to-face or video calls preferred</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="text-orange-600 mr-2">🧘‍♂️</span>
                My Approach to Life
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>&bull; Introvert with most, extrovert with close ones</li>
                <li>&bull; Take time to build meaningful connections</li>
                <li>&bull; Traditional values with modern thinking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Perfect Weekend Vision
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              A balance of meaningful conversations, outdoor activities, and 
              working together on shared goals - always with room for spontaneous adventures! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
