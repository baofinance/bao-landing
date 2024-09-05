import { useState, useEffect } from 'react';

export function useTypingEffect(words, typingSpeed = 100, delayBetweenWords = 1000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        // Word is fully typed, wait before deleting
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && currentText === '') {
        // Word is fully deleted, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else if (isDeleting) {
        // Deleting the word
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        // Typing the word
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, delayBetweenWords]);

  return { text: currentText, isTyping: !isDeleting || currentText !== '' };
}
