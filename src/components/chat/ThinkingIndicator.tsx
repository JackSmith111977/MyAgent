interface ThinkingIndicatorProps {
  content?: string;
}

const ThinkingIndicator: React.FC<ThinkingIndicatorProps> = ({ content }) => {
  const thinkingText = content || '模型正在思考中...';

  return (
    <div className="thinking-indicator">
      <span>💡 {thinkingText}</span>
    </div>
  );
};

export default ThinkingIndicator;
