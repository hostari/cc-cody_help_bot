import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  res.send(`This is an AI helper bot, perform a POST /prompt with JSON body: {"prompt": my-prompt-here } and you will get a response.`);
});

const port = parseInt(process.env.PORT) || 8082;
app.listen(port, () => {
  console.log(`app: listening on port ${port}`);
});