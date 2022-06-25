// import { useDispatch } from 'react-redux';
import { voteAnecdote } from './anecdoteSlice';
import { setNotification } from '../Notification/NotificationSlice';
import React from 'react';
import { connect } from 'react-redux';

function Anecdote(props, { id, content, votes }) {
  // const dispatch = useDispatch();
  const handleVoteButton = () => {
    props.voteAnecdote(props.id);
    props.setNotification(`you voted "${props.content}"`, 3);
    // dispatch(voteAnecdote(id));
    // dispatch(setNotification(`you voted "${content}"`, 3));
  };

  return (
    <li key={props.id}>
      <div>{props.content}</div>
      <div>
        has {props.votes}
        <button onClick={handleVoteButton}>vote</button>
      </div>
    </li>
  );
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    anecdotes: state.anecdotes,
  };
};

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
};

const connectedAnecdote = connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdote);

export default connectedAnecdote;
