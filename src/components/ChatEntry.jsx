import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heart = props.liked ? '❤️' : '🤍';

  const likeButtonClicked = () => {
    props.onLikeCountChange(props.id);
  };

  return (
    <div className={`chat-entry ${props.isLocal ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className='message-body'>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button onClick={likeButtonClicked} className="like">{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeCountChange: PropTypes.func,  //remove isRequired to prevent test error
  isLocal: PropTypes.bool,
};

export default ChatEntry;
