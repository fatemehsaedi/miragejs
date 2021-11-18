import {makeServer} from '../Mirage/Server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
} 

const getReminder = (url) => {
  return fetch(url, {
    method: "GET",
  }).then((response) => response.json());
};

const api = {
  getReminder,
};

export default api;
