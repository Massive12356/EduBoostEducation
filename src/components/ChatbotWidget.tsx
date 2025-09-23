import React, { useState } from 'react';
import { Send, MessageCircle, PhoneCall } from 'lucide-react';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: newMessages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
      const data = await res.json();
      const reply = data.choices[0].message as { role: string; content: string };

      setMessages([...newMessages, { role: 'assistant', content: reply.content }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { role: 'assistant', content: 'Error: could not respond.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl focus:outline-none"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className="
            fixed bottom-5 right-5 
            w-[22rem] sm:w-[24rem] md:w-[26rem] 
            h-[30rem] sm:h-[32rem]
            bg-white dark:bg-gray-900 
            shadow-xl rounded-2xl overflow-hidden 
            border border-gray-200 dark:border-gray-700 
            flex flex-col z-40
          "
        >
          {/* Header */}
          <div className="bg-blue-600 text-white px-3 py-3 font-semibold flex justify-between items-center">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> {/* Communicate icon */}
              <span>Chat with us</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={`inline-block px-3 py-2 rounded-xl ${
                    m.role === 'user'
                      ? 'bg-blue-100 text-gray-900'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <p className="text-sm text-gray-500">Thinking…</p>}
          </div>

          {/* Input */}
          <div className="flex p-2 border-t dark:border-gray-700">
            <input
              className="flex-1 border rounded-lg p-2 text-sm dark:bg-gray-800 dark:text-white"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
