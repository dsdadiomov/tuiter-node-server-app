import express from 'express'
import session from "express-session";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(
  cors({
      credentials: true,
      origin:  'https://idyllic-sunshine-7e8711.netlify.app/tuiter'
  })
);
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(express.json())
HelloController(app)
UserController(app)
TuitsController(app);
AuthController(app);

const port = process.env.PORT || 4000;
app.listen(port)

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING).then(
    () => { 
       console.log("Connected!");
   },
    err => { 
      console.log(err);
   }
  );
