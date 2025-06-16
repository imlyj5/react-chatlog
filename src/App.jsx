import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(messages);

  const likeCountChange = (chatId) => {
    const chats = chatData.map(chat => {
      if (chat.id === chatId) {
        return { ...chat, liked: !chat.liked };
      } else {
        return chat;
      }
    });

    setChatData(chats);
  };

  const likedCount = chatData.filter((chat) => chat.liked).length;

  return (
    <div id="App">
      <header>
        <h1>React ChatLog</h1>
      </header>
      <main>
        <h2>{likedCount} ❤️s</h2>

        {/* Wave 01: Render one ChatEntry component. Commented out to avoid duplicate message*/}
        {/* <ChatEntry
          sender="Vladimir"
          body="why are you arguing with me"
          timeStamp="2018-05-29T22:49:06+00:00"
        /> */}

        {/* Wave 02: Render ChatLog component */}
        <ChatLog entries={chatData} onLikeCountChange={likeCountChange}></ChatLog>

      </main>
    </div>
  );
};

export default App;

