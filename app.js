
import express from "express"; 
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import cors from "cors";
import session from "express-session";

const app = express();
app.use(express.json()); 
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  }),
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