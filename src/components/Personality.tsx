'use client'

export default function Personality() {
  return (
    <section id="personality" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          One Thing You Should Know About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👫</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              Dating Me Is Like
            </h3>
            <div className="text-sm sm:text-base text-gray-700 space-y-2">
              <p>&bull; Calm vibes, deep convos & rarely Gyaani Baba mode.</p>
              <p>&bull; I'll probably ask you NOT to become a housewife. I can't even imagine this.</p>
              <p>&bull; Earn, build & automate the boring stuff for kitchen or home to save time for both.</p>
              <p>&bull; I will be nudging for travel plans: beach, mountains, camping, and adventure!</p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤝</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              We Will Get Along If
            </h3>
            <div className="text-sm sm:text-base text-gray-700 space-y-2">
              <p>&bull; Value sincere, loyal and mutual respect.</p>
              <p>&bull; Ready for a serious, committed relationship.</p>
              <p>&bull; Appreciate authenticity and prefer direct communication over hints and games.</p>
              <p>&bull; Comfortable with someone who values quiet moments, meaningful conversations, and a simple lifestyle.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            My Current Honest Thoughts on Relationships
          </h3>
          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
            <div className="text-sm sm:text-base text-gray-700 space-y-3">
              <p>
                🤔 Sometimes I get confused: first, sincerity and loyalty are appreciated, but then they become boring or clingy. I genuinely want to understand what you truly value. If I don't put in effort, it's seen as ego; if I do, it's seen as clingy. What do you really want? 💬
              </p>
              <p>
                🙇‍♂️ I always try my best to respect, but honestly, currently I'm a bit scared of relationships.
              </p>
              <p>
                📝 This is my honest opinion, also I don't like this opinion either and I hope we'll help us see things differently and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
