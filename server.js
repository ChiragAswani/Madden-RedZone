const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'))

app.get('/', (req, res) => {return res.sendFile(path.join(__dirname, "../client", "index.html"));});

app.get("/log-usage",function(req, res){
    const text = (`Timestamp: ${new Date().getTime()} | IP: ${req.query.ip}`);
    return res.status(200).send(text);
});

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}...`);});