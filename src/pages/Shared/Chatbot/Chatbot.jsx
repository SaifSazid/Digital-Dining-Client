import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "gQxENmenBRtu-PawsYP1M",
        domain: "www.chatbase.co"
      };
    `;

    const chatbaseScript = document.createElement('script');
    chatbaseScript.src = 'https://www.chatbase.co/embed.min.js';
    chatbaseScript.chatbotId = 'gQxENmenBRtu-PawsYP1M';
    chatbaseScript.domain = 'www.chatbase.co';
    chatbaseScript.defer = true;

    document.head.appendChild(script);
    document.head.appendChild(chatbaseScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(chatbaseScript);
    };
  }, []);

  return <></>
};

export default Chatbot;
