import axios from 'axios';
const apiUrl = 'https://api.149.photos/';
const apiKey = '521985b5-cb3a-47d8-8c42-105af0b4f3a1';

// Get user information by email address and password
export const getUser = async (username: string, password: string) => {
  const config = {
    headers: {
      'Content-Type': 'text/plain',
      'X-API-Key': apiKey,
    },
  };
  const requestURL = apiUrl + 'user?email=' + username + '&password=' + password;
  const data = await axios.get(requestURL,config);
  console.log(data)
};
