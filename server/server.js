const express = require('express');
var cors = require('cors');

require('dotenv/config');
const db = require('./db');

const app = express();
app.use(cors());
let port = process.env.PORT || 5000;
const portArg = process.argv[2];
if (portArg !== undefined && !Number.isNaN(parseInt(portArg, 10))) {
  port = parseInt(portArg, 10);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRouter = require('./routes/users');
app.use('/api/v1/users', userRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
