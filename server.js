const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/client'))
app.get('/', (req, res) => {return res.sendFile(path.join(__dirname, "../client", "index.html"));});

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}...`);});