import { useSelector, useDispatch } from 'react-redux';
import {
  filteredAnecdotes,
  initializeAnecdotes,
} from './components/Anecdote/anecdoteSlice';
import { useEffect } from 'react';
import Notification from './components/Notification/Notification';
import AnecdoteList from './components/Anecdote/AnecdoteList';
import Filter from './components/Filter/Filter';
import CreateForm from './components/Anecdote/AnecdoteForm';

const App = () => {
  const anecdotes = useSelector((state) =>
    state.filter === ''
      ? state.anecdotes
      : filteredAnecdotes(state.anecdotes, state.filter.filterBy)
  );
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList anecdotes={anecdotes} />
      <h2>Create new</h2>
      <CreateForm />
      {notification.visible && <Notification />}
    </div>
  );
};

export default App;
