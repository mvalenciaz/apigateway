const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const getUser = async function (userId) {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
};


module.exports = {
    getUser
};