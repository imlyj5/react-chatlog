import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((chat, index) => {
    return (
      <ChatEntry
        key={index}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked = {chat.liked}
        onLikeCountChange={props.onLikeCountChange}
        isLocal={chat.sender === props.local}
      />
    );
  });

  return (
    <section>
      {chatEntryComponents}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })),
  onLikeCountChange: PropTypes.func,  //remove isRequired to prevent test error
  local: PropTypes.string,
};

export default ChatLog;