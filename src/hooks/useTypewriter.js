// useTypewriterLastWord.js
import { useState, useEffect } from 'react';

const useTypewriterLastWord = (sentence, words, speed = 100, delay = 2000) => {
  const [staticPart, setStaticPart] = useState(sentence);
  const [dynamicPart, setDynamicPart] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const splitSentence = sentence.split(' ');
    const staticText = splitSentence.slice(0, -1).join(' ') + ' ' + splitSentence[splitSentence.length - 1];
    setStaticPart(staticText);

    if (isTyping) {
      if (charIndex < words[wordIndex].length) {
        setDynamicPart(words[wordIndex].slice(0, charIndex + 1));
        const typingTimeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(typingTimeout);
      } else {
        setTimeout(() => setIsTyping(false), delay);
      }
    } else {
      const eraseTimeout = setTimeout(() => {
        if (charIndex > 0) {
          setDynamicPart(words[wordIndex].slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsTyping(true);
        }
      }, speed);
      return () => clearTimeout(eraseTimeout);
    }
  }, [sentence, words, speed, delay, isTyping, charIndex, wordIndex]);

  return { staticPart, dynamicPart };
};

export default useTypewriterLastWord;
