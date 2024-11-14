import React from "react";
import './chat.css';

function ChatPage() {
  return (
    <div className="Chat-page">
      <h1>Welcome to the AI Chat Feature</h1>
      <p>Click below to access the AI chat:</p>
      <a 
        href="https://huggingface.co/spaces/aytena/ChatTherapy1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="chat-link"
      >
        Click here to access the AI chat feature
      </a>
    </div>
  );
}

export default ChatPage;
