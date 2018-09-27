const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>This is my server</h1>');
});

app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});

