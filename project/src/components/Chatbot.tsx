import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import VoiceInput from './VoiceInput';
import { generateResponse } from '../utils/chatbot';
import { Bot } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot: React.FC = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      text: t('welcome'),
      isBot: true
    }
  ]);

  const handleSendMessage = (message: string) => {
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    
    const response = generateResponse(message);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);
  };

  const handleVoiceInput = (transcript: string) => {
    handleSendMessage(transcript);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-xl">
      <div className="flex items-center justify-between p-4 border-b bg-blue-500 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Bot className="w-6 h-6" />
          <h2 className="text-lg font-semibold">Jal Saanjeev</h2>
        </div>
        <VoiceInput onTranscript={handleVoiceInput} />
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;