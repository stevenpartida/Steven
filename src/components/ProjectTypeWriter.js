import React, { useState, useEffect } from 'react';

export const ProjectTypewriter = () => {
    const fullText = "projects";
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
        <span className='projects-type-animation'>
            <span className='section-header-symbol'>/ </span>
            {displayText.slice(0, 8)}
            <span className={`cursor ${typingFinished ? 'projects-blinking-cursor' : ''}`}> |</span>
        </span>
      </div>
    );
  };