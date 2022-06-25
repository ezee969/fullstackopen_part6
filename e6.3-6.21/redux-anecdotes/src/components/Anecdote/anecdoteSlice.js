import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote: (state, action) => {
      const id = action.payload;
      const anecdoteIndex = state.findIndex((anecdote) => anecdote.id === id);
      state[anecdoteIndex].votes += 1;
      state.sort((a, b) => b.votes - a.votes);
    },
    add: (state, action) => {
      state.push(action.payload);
    },
    setAnecdotes: (state, action) => {
      return action.payload;
    },
  },
});

export const filteredAnecdotes = (anecdotes, filter) =>
  anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter)
  );

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    anecdotes.sort((a, b) => b.votes - a.votes);
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(add(newAnecdote));
  };
};

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    await anecdoteService.voteUpdate(id);
    dispatch(vote(id));
  };
};

export const { vote, add, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
