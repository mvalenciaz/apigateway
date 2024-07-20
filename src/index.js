const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { getUser } = require('./services/users');
const { getPostsbyUserId, getPost } = require('./services/posts');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users/:userId/posts', async(req, res) => {
  const userId = req.params.userId;

  const user = await getUser(userId);
  const posts = await getPostsbyUserId(userId);

  res.status(200).json({user, posts});
});

app.get('/posts/:postId', async(req, res) => {
  const postId = req.params.postId;
  const post = await getPost(postId);
  const user = await getUser(post.userId);

  post.user = user;

  res.status(200).json(post);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});