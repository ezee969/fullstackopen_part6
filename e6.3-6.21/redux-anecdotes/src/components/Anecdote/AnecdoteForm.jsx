import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from './anecdoteSlice';
import { setNotification } from '../Notification/NotificationSlice';

export default function CreateForm() {
  const [anecdoteContent, setAnecdoteContent] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setAnecdoteContent(event.target.value);
  };

  const handleCreateButton = async (event) => {
    event.preventDefault();
    dispatch(createAnecdote(anecdoteContent));
    setAnecdoteContent('');
    dispatch(setNotification('anecdote added to the redux store!', 3));
  };

  return (
    <form>
      <div>
        <input
          onChange={handleInputChange}
          value={anecdoteContent}
          type='text'
        />
      </div>
      <button onClick={(event) => handleCreateButton(event)}>create</button>
    </form>
  );
}
