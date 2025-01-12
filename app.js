const path = require('path');

const express = require('express');

const userRoutes = require('./routes/user');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'main-page.html'));
});

app.listen(3000);
