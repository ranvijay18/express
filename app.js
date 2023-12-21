const http = require('http');
const express = require('express');

const app = express();


app.use((req,res,next) => {
    console.log("In the Middleware!");
    next();
});

app.use((req,res,next) => {
    console.log("In another Middleware!");
    res.send('<h1>Hello Express.js</h1>')
});

// const server = http.createServer(routes);
const server = http.createServer(app);

server.listen(4000);