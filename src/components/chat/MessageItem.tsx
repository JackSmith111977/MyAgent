import type { Message } from '@/types/chat';
import ThinkingIndicator from './ThinkingIndicator';
import TypewriterText from './TypewriterText';

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const { role, content, isThinking = false, isStreaming = false } = message;

  if (isThinking) {
    return (
      <div className="message-item model-message">
        <ThinkingIndicator content={content} />
      </div>
    );
  }

  return (
    <div
      className={`message-item ${role === 'user' ? 'user-message' : 'model-message'}`}
    >
      {role === 'model' && isStreaming ? (
        <TypewriterText content={content} />
      ) : (
        content
      )}
    </div>
  );
};

export default MessageItem;
