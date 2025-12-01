import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  content: string;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  content,
  speed = 30,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText('');

    if (!content) {
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      if (index < content.length) {
        setDisplayedText(content.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 500); // 隐藏光标
      }
    }, speed);

    return () => clearInterval(timer);
  }, [content, speed]);

  return (
    <span className="typewriter-text">
      {displayedText}
      {showCursor && <span className="typewriter-cursor" />}
    </span>
  );
};

export default TypewriterText;
