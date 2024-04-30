import axios from 'axios';

const baseUrl = 'http://localhost:5173'; 

export const getFeedback = async () => {
  try {
    const response = await axios.get(`${baseUrl}/feedback`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postFeedback = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/feedback`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};