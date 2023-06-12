import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import AuthController from "./users/auth-controller.js";



const app = express()
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
   );
   
app.use( cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
 );
app.use(express.json());
const port = process.env.PORT || 4000;


TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT ||4000)

AuthController(app);


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