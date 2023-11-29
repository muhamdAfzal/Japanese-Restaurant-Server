const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 6066;


const topDish = require('./data/Top_Picks.json');
const chef = require('./data/Top_Chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from server!!!')
})

app.get('/dish', (req, res) => {
    res.send(topDish);
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.listen(port, () => {
    console.log(`This server is running on ${port}`)
})