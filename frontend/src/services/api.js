import axios from 'axios'; // A tool to make HTTP requests

const API_URL = 'http://localhost:5000/api'; // Your back-end’s address

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data; // Returns the list of courses
};
