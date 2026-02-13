import React, { useState, useEffect, useRef } from 'react';
import {
    MessageSquare,
    Plus,
    Search,
    Image as ImageIcon,
    LayoutGrid,
    Send,
    User,
    Bot,
    Menu,
    PanelLeftClose,
    PanelLeft
} from 'lucide-react';
import './ChatPage.css';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, role: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Reset textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = '24px';
        }

        // Simulate response
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                text: "I am the Government Schemes AI. I can help you find schemes, check eligibility, and understand application processes. (Simulated Response)",
                role: 'assistant'
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const handleInputCheck = (e) => {
        setInput(e.target.value);
        // Auto-resize textarea
        e.target.style.height = 'auto';
        e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(e);
        }
    };

    return (
        <div className="chat-layout">
            {/* Sidebar */}
            <div className={`chat-sidebar ${!sidebarOpen ? 'collapsed' : ''}`}>
                <button className="new-chat-btn" onClick={() => setMessages([])}>
                    <Plus size={16} />
                    <span>New chat</span>
                </button>

                <div className="sidebar-menu">
                    <div className="menu-item">
                        <MessageSquare size={16} />
                        <span>Previous Chat 1</span>
                    </div>
                    {/* Mock items based on Screenshot */}
                    <div className="menu-item"><Search size={16} /> <span>Search chats</span></div>
                    <div className="menu-item"><ImageIcon size={16} /> <span>Images</span></div>
                    <div className="menu-item"><LayoutGrid size={16} /> <span>Apps</span></div>
                </div>

                {/* User Profile / Settings could go here */}
            </div>

            {/* Main Chat Area */}
            <div className="chat-main">
                {/* Toggle Sidebar Button (visible when collapsed or always?) */}
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit', opacity: 0.6 }}
                    >
                        {sidebarOpen ? <PanelLeftClose size={24} /> : <PanelLeft size={24} />}
                    </button>
                </div>

                <div className="chat-messages-container">
                    {messages.length === 0 ? (
                        <div className="chat-welcome">
                            <h1>What can I help with?</h1>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg.id} className={`chat-row ${msg.role}`}>
                                <div className="chat-content">
                                    <div className={`chat-avatar ${msg.role}`}>
                                        {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                                    </div>
                                    <div className="chat-text">{msg.text}</div>
                                </div>
                            </div>
                        ))
                    )}

                    {isTyping && (
                        <div className="chat-row assistant">
                            <div className="chat-content">
                                <div className="chat-avatar assistant"><Bot size={18} /></div>
                                <div className="chat-text">Thinking...</div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chat-input-area">
                    <div className="chat-input-container">
                        <textarea
                            ref={textareaRef}
                            className="chat-textarea"
                            placeholder="Ask anything"
                            rows={1}
                            value={input}
                            onChange={handleInputCheck}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            className="chat-submit-btn"
                            onClick={handleSend}
                            disabled={!input.trim() || isTyping}
                        >
                            <Send size={18} />
                        </button>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.6 }}>
                        AI can make mistakes. Consider checking important information.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
