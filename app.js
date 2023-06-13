// creates/configures HTTP server listening for incoming requests

import express from "express"; // creates an instance of the express library using ES6
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./controllers/users/auth-controller.js";
//  Cross Origin Resource Sharing -> establishes the rules by which resources can be shared across domains (origins)
import cors from "cors";
import session from "express-session";

const app = express();
app.use(express.json()); // for parsing application/json (helpful when we use ...req.body from json)

app.use(
  // configure cors as middleware
  // restrict cross origin resource sharing to the react application
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  }),
  // configure server session
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
    store: new session.MemoryStore()
  })
);

HelloController(app);
UserController(app);
TuitsController(app);
AuthController(app);

app.listen(process.env.PORT || 4000);

/* //const express = require('express');
import express from 'express';
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World! How are you?');
 });

 app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
    });

const users = [{
    _id: '1',
    username: 'john',
    password: 'password123admin',
    firstname: 'John',
    lastname: 'Doe',
    },
    {
    _id: '2',  
    username: 'jane',
    password: 'password123member'
    },
];


app.get('/users/:username', (req, res) => {
    res.send( {username: req.params.username});
    });

app.listen(4000); */