const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('hello there');
});

const listener = app.listen(3000, () => {
    console.log(`listening on port ${listener.address().port}`);
});