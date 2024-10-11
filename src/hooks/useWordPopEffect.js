import { useState, useEffect } from 'react'

export function useWordPopEffect(
  words,
  wordDuration = 2000,
  lastWordDuration = 3000
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const isLastWord = currentWordIndex === words.length - 1
    const duration = isLastWord ? lastWordDuration : wordDuration

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 300) // Short delay before showing next word
    }, duration)

    return () => clearTimeout(timer)
  }, [currentWordIndex, words, wordDuration, lastWordDuration])

  return { word: words[currentWordIndex], isVisible }
}
