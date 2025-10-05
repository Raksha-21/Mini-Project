import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { getTranslation } from '@/lib/translations';

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: 'Hello! How can I help you with your plants today?', isUser: false }
  ]);
  const [input, setInput] = useState('');
  const { language } = useAuth();

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'I can help you with plant care, disease detection, and gardening tips. What would you like to know?',
        isUser: false
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      {/* Floating chatbot button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full gradient-primary shadow-lg hover:shadow-xl transition-all z-50"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      )}

      {/* Chatbot interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col bg-white">
          {/* Header */}
          <div className="gradient-primary p-4 rounded-t-lg flex items-center justify-between">
            <h3 className="text-white font-semibold">
              {getTranslation('aiAssistant', language)}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} className="gradient-primary text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
