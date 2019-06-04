const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.router('/feed', feedRoutes);

app.listen(8080);