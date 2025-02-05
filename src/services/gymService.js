import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000/gymx',  // Replace with your Spring Boot URL
});

export const getGym = async () => {
  try {
    const response = await api.get('/gym');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createGym = async (gym) => {
  try {
    const response = await api.post('/gym', gym);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
