import type { Message } from '@/types/chat';
import { useCallback, useState } from 'react';
import InputArea from './InputArea';
import MessageList from './MessageList';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = useCallback(async (content: string) => {
    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // 模拟模型回复流程
    try {
      // 这里应该连接实际的 SSE 接口
      // 示例流程：
      // 1. 添加 thinking 消息
      const thinkingMessage: Message = {
        id: `thinking-${Date.now()}`,
        role: 'model',
        content: '正在思考...',
        isThinking: true,
      };

      setMessages(prev => [...prev, thinkingMessage]);

      // 2. 模拟接收 SSE 流数据
      // 实际实现中这里会连接 SSE 并处理流式响应

      // 3. 移除 thinking 消息，添加实际回复
      setTimeout(() => {
        setMessages(prev => {
          const filtered = prev.filter(msg => !msg.isThinking);
          const modelMessage: Message = {
            id: `model-${Date.now()}`,
            role: 'model',
            content: '这是模拟的模型回复内容。',
            isStreaming: true,
          };
          return [...filtered, modelMessage];
        });
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <MessageList messages={messages} />
      <InputArea onSend={handleSend} disabled={isLoading} />
    </div>
  );
};

export default ChatContainer;
