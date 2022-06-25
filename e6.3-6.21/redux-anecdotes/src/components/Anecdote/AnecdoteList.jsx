import React from 'react';
import Anecdote from './Anecdote';

export default function AnecdoteList({ anecdotes }) {
  return (
    <ul>
      {anecdotes?.map((anecdote) => (
        <Anecdote
          id={anecdote.id}
          key={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
        />
      ))}
    </ul>
  );
}
