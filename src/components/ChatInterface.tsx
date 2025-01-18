import React, { useState } from 'react';

type Message = {
    text: string;
    sender: 'user' | 'system';
};

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            // Simulate a response from the system
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: 'Response from system', sender: 'system' },
                ]);
            }, 1000);
        }
    };

    return (
        <div className="chat-interface p-4 border rounded-lg shadow-lg">
            <div className="messages h-64 overflow-y-auto border-b mb-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <span className={msg.sender === 'user' ? 'font-bold' : 'text-gray-500'}>
                            {msg.sender === 'user' ? 'You: ' : 'System: '}
                        </span>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-area flex">
                <input
                    type="text"
                    className="flex-grow border rounded-lg p-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                />
                <button
                    className="ml-2 bg-blue-500 text-white rounded-lg px-4"
                    onClick={handleSend}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatInterface;