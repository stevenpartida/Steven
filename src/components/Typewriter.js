import React, { useState, useEffect } from 'react';

export const Typewriter = () => {
  const fullText = "Hi, my name is Steven";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const interval = setInterval(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => clearInterval(interval);
    } else {
      setTypingFinished(true);
    }
  }, [index, fullText]);

  return (
    <div>
      <span className='intro-type-animation'>
        {displayText.slice(0, 14)}
        <span style={{ color: '#4E9FE5' }}>{displayText.slice(14)}</span>
        <span className={`cursor ${typingFinished ? 'blinking-cursor' : ''}`}> |</span>
      </span>
    </div>
  );
};
