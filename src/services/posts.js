const axios = require('axios');

const API_URL = "https://jsonplaceholder.typicode.com/posts"

const getPostsbyUserId = async function (userId) {
    const response = await axios.get(`${API_URL}?userId=${userId}`);
   return response.data
}

const getPost = async function (postId) {
    const response = await axios.get(`${API_URL}/${postId}`);
   return response.data
}

module.exports ={
    getPostsbyUserId,
    getPost
}