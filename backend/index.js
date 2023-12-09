
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import config from "./config/config.js";
import mongoose from "mongoose";

const app = express();
const CURRENT_WORKING_DIR = process.cwd();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./server/dist/app"));
app.use("/", userRoutes);
app.use("/", authRoutes);

// bodyparser set up
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

const PORT = config.port;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri).then(() => {
    console.log("Connected to the database!");
  })

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

app.get('/', (req, res) =>
    res.send(`Our web is running ${PORT}`)
);
