const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});