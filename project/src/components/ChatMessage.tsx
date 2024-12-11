import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { cn } from '../utils/cn';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div className={cn(
      "flex items-start space-x-3 p-4 rounded-lg",
      isBot ? "bg-blue-50" : "bg-gray-50"
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center",
        isBot ? "bg-blue-500" : "bg-gray-500"
      )}>
        {isBot ? <Bot className="w-5 h-5 text-white" /> : <MessageCircle className="w-5 h-5 text-white" />}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;