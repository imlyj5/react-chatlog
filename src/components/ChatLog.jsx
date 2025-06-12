import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries}) => {
  const chatEntryComponents = entries.map(chat => {
    return (
      <ChatEntry
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked = {chat.liked}
      />
    );
  });

  return (
    <section>
      {chatEntryComponents}
    </section>
  );
};

export default ChatLog;