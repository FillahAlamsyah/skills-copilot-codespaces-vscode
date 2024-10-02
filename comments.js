// Create Web Server

// Import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Set up the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    const comments = fs.readFileSync('comments.json');
    const commentsArray = JSON.parse(comments);
    commentsArray.push(comment);

    fs.writeFileSync('comments.json', JSON.stringify(commentsArray));

    res.json(comment);
});

// Get all comments
app.get('/comments', (req, res) => {
    const comments = fs.readFileSync('comments.json');
    res.json(JSON.parse(comments));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});