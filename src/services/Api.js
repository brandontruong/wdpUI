import axios from 'axios';

const create = (baseURL) => {
  const fetchData = () => axios.get(`${baseURL}/api/db`);
  return {
    // a list of the API functions
    fetchData,
  };
};

export default create;
