import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const update = async (data) => {
  console.log('data', data);
  const url = `${baseUrl}/${data.id}`;
  const response = await axios.put(url, data);
  console.log('response.data', response.data);
  return response.data;
};

export default { getAll, createNew, update };
