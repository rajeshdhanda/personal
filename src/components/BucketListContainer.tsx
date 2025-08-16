'use client'

import { useState } from 'react'
import { bucketListData } from '@/data/bucketListData'

export default function BucketListContainer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('all')

  // Get completed items from the data
  const completedItems = bucketListData.filter(item => item.completed).map(item => item.id)

  // Filter and search logic
  const filteredItems = bucketListData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (activeFilter === 'all') return matchesSearch
    if (activeFilter === 'completed') return matchesSearch && item.completed
    return matchesSearch && item.category === activeFilter
  })

  const progressPercentage = Math.round((completedItems.length / bucketListData.length) * 100)

  const categoryColors = {
    travel: 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300',
    career: 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300',
    personal: 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border border-purple-300',
    adventure: 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300',
    learning: 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border border-yellow-300',
  }

  const difficultyIcons = {
    1: '⭐',
    2: '⭐⭐',
    3: '⭐⭐⭐',
    4: '⭐⭐⭐⭐',
    5: '⭐⭐⭐⭐⭐',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-16">
      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-white via-blue-50 to-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-medium rounded-full shadow-lg">
              ✨ Personal Goals & Adventures
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6">
            My Bucket List
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed px-4">
            Dreams, Goals & Adventures to Accomplish — A journey of personal growth and unforgettable experiences
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-lg mx-auto px-4">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <p className="text-base sm:text-lg font-semibold text-gray-700 text-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{completedItems.length}</span> 
                <span className="text-gray-500 mx-2">/</span> 
                <span className="text-lg sm:text-xl text-gray-600">{bucketListData.length}</span> completed
                <span className="inline-block px-2 sm:px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full text-xs sm:text-sm shadow-md ml-2 sm:ml-4">
                  {progressPercentage}%
                </span>
              </p>
              <div className="bg-gray-200 rounded-full h-4 sm:h-6 shadow-inner border border-gray-200 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 h-full rounded-full transition-all duration-700 ease-out shadow-sm relative"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 sm:py-8 lg:py-10 bg-gradient-to-r from-white via-gray-50 to-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Search */}
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-search text-white text-xs"></i>
                </div>
              </div>
              <input
                type="text"
                placeholder="Search your dreams and goals..."
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md bg-white transition-all duration-200 hover:shadow-lg text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center w-full">
              {['all', 'travel', 'career', 'personal', 'adventure', 'learning', 'completed'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-200 capitalize shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-xs sm:text-sm lg:text-base ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {filter === 'all' ? '🌟 All' : 
                   filter === 'completed' ? '✅ Done' :
                   filter === 'adventure' ? '🏔️ Adventure' :
                   filter === 'learning' ? '📚 Learning' :
                   filter === 'personal' ? '💪 Personal' :
                   filter === 'travel' ? '✈️ Travel' :
                   filter === 'career' ? '💼 Career' : filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bucket List Items */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-2 sm:border-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  item.completed 
                    ? 'bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-green-800 shadow-green-100' 
                    : 'bg-gradient-to-r from-white via-gray-50 to-white border-gray-800 hover:border-blue-600'
                }`}
              >
                {/* Animated background effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  item.completed ? 'bg-gradient-to-r from-green-100/50 to-emerald-100/50' : 'bg-gradient-to-r from-blue-50/50 to-indigo-50/50'
                }`}></div>
                
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                    {/* Number and Checkbox */}
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-md ${
                        item.completed 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600'
                      }`}>
                        #{item.id}
                      </div>
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full border-2 sm:border-3 flex items-center justify-center transition-all duration-200 ${
                          item.completed
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-400 text-white shadow-lg'
                            : 'border-gray-300 hover:border-blue-400 bg-white'
                        }`}
                      >
                        {item.completed && (
                          <i className="fas fa-check text-xs sm:text-sm"></i>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <h3 className={`text-lg sm:text-xl lg:text-xl font-bold leading-tight ${
                          item.completed ? 'text-green-800' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </h3>
                        <span className={`text-xs sm:text-sm px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full font-semibold shadow-sm ${categoryColors[item.category]}`}>
                          {item.category}
                        </span>
                      </div>
                      
                      <p className={`text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed ${
                        item.completed ? 'text-green-700' : ''
                      }`}>
                        {item.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xs sm:text-sm font-medium text-gray-600">Difficulty:</span>
                          <div className="flex items-center gap-1">
                            <span className="text-base sm:text-lg">{difficultyIcons[item.difficulty]}</span>
                            <span className="text-xs sm:text-sm text-gray-500 ml-1">({item.difficulty}/5)</span>
                          </div>
                        </div>
                        
                        {item.completed && (
                          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                            <i className="fas fa-trophy text-green-600 text-xs sm:text-sm"></i>
                            <span className="text-xs sm:text-sm font-medium text-green-700">Completed</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-8 sm:py-12 lg:py-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 mx-3 sm:mx-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-search text-lg sm:text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 px-4">No items found</h3>
              <p className="text-gray-600 text-base sm:text-lg px-4">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
