import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const anecdote = { content, votes: 0 };
  const response = await axios.post(baseUrl, anecdote);
  return response.data;
};

const voteUpdate = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  const newAnecdote = await axios.put(`${baseUrl}/${id}`, {
    ...data,
    votes: data.votes + 1,
  });
  return newAnecdote.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, voteUpdate };
