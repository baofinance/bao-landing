import { useState, useEffect } from 'react'

export function useTypingEffect(
  words,
  typingSpeed = 150,
  pauseDuration = 1000
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timer = setTimeout(
      () => {
        setCurrentText((prev) => {
          if (!isDeleting && prev === word) {
            setIsTyping(false)
            setTimeout(() => {
              setIsDeleting(true)
              setIsTyping(true)
            }, pauseDuration)
            return prev
          }
          if (isDeleting && prev === '') {
            setIsDeleting(false)
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
            return ''
          }
          if (isDeleting) {
            return prev.slice(0, -1)
          }
          return word.slice(0, prev.length + 1)
        })
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    pauseDuration,
  ])

  return { text: currentText, isTyping }
}
