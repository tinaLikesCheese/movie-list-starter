const express = require('express');
const app = express();
const PORT = 3000; 
const path = require('path');
const db = require('./db/index.js')

app.use(express.json());
app.use(express.static('/Users/TinaLe/movie-list-starter/dist'));

app.get('/movies', (req, res) => res.send('Hello World!'))

app.listen(PORT, function () {
    console.log(`Server listening on PORT ${PORT}`); 
})


