'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Code, Award, Terminal, LineChart, Trophy } from 'lucide-react'

interface PlatformStats {
  platform: string
  stats: {
    solved: number
    rank?: string
    rating?: number
    contests?: number
  }
}

const SocialRankings = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [platforms, setPlatforms] = useState<PlatformStats[]>([
    {
      platform: 'LeetCode',
      stats: {
        solved: 0,
        rank: 'Loading...',
        rating: 0,
        contests: 0
      }
    },
    {
      platform: 'Codeforces',
      stats: {
        solved: 0,
        rank: 'Loading...',
        rating: 0,
        contests: 0
      }
    },
    {
      platform: 'GeeksforGeeks',
      stats: {
        solved: 0,
        rank: 'Loading...',
        rating: 0
      }
    }
  ])

  useEffect(() => {
    const fetchCodolioData = async () => {
      try {
        // In a real implementation, you would fetch from the Codolio API
        // For now, we'll simulate the API response
        const response = await fetch('https://codolio.com/api/profile/uNhoxM57')
        const data = await response.json()
        
        // Simulate successful data fetch
        setTimeout(() => {
          setPlatforms([
            {
              platform: 'LeetCode',
              stats: {
                solved: 450,
                rank: 'Guardian',
                rating: 1850,
                contests: 25
              }
            },
            {
              platform: 'Codeforces',
              stats: {
                solved: 380,
                rank: 'Expert',
                rating: 1750,
                contests: 32
              }
            },
            {
              platform: 'GeeksforGeeks',
              stats: {
                solved: 520,
                rank: 'Top 5%',
                rating: 2100
              }
            }
          ])
          setIsLoading(false)
        }, 1500)
      } catch (err) {
        setError('Failed to fetch coding profiles data')
        setIsLoading(false)
      }
    }

    fetchCodolioData()
  }, [])

  const platformIcons = {
    LeetCode: Code,
    Codeforces: Trophy,
    GeeksforGeeks: Terminal
  }

  const getStatColor = (platform: string) => {
    switch (platform) {
      case 'LeetCode':
        return 'text-yellow-500 dark:text-yellow-400'
      case 'Codeforces':
        return 'text-red-500 dark:text-red-400'
      case 'GeeksforGeeks':
        return 'text-green-500 dark:text-green-400'
      default:
        return 'text-blue-500 dark:text-blue-400'
    }
  }

  if (error) {
    return (
      <section id="rankings" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500 dark:text-red-400">
            <p>{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rankings" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Coding Profiles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platformIcons[platform.platform as keyof typeof platformIcons]
            return (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${getStatColor(platform.platform)} bg-opacity-10`}>
                    <Icon className={`w-6 h-6 ${getStatColor(platform.platform)}`} />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{platform.platform}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Problems Solved</span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="font-semibold"
                    >
                      {isLoading ? '...' : platform.stats.solved}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Current Rank</span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                      className={`font-semibold ${getStatColor(platform.platform)}`}
                    >
                      {platform.stats.rank}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Rating</span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      className="font-semibold"
                    >
                      {isLoading ? '...' : platform.stats.rating}
                    </motion.span>
                  </div>
                  {platform.stats.contests && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Contests</span>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className="font-semibold"
                      >
                        {isLoading ? '...' : platform.stats.contests}
                      </motion.span>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SocialRankings

