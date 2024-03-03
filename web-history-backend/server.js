const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { inputURL, previous, next, current, all } = require('./controller/histiesController');
const connectDB = require('./config/db');
const app = express();
const PORT = 3010;

app.use(bodyParser.json());
connectDB();
app.use(cors());

app.post('/input', async (req, res) => {
    const { url } = req.body;
    const result = await inputURL(url);
    res.send(result);
});

app.get('/prev', async (req, res) => {
    const result = await previous();
    res.send(result);
});

app.get('/next', async (req, res) => {
    const result = await next();
    res.send(result);
});

app.get('/current', async (req, res) => {
    const result = await current();
    res.send(result);
});

app.get('/all', async (req, res) => {
    const result = await all();
    res.send(result);
});

app.listen(PORT, () => {
    console.log('Server running on PORT: '+PORT);
});