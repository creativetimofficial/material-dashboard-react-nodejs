import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import "./passport.js";
import { dbConnect } from "./mongo";
import { meRoutes, authRoutes } from "./routes";
import path from "path";
import { fileURLToPath } from 'url';
import * as fs from "fs";
import cron from "node-cron";
import ReseedAction from "./mongo/ReseedAction";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;
const app = express();

const whitelist = [process.env.APP_URL_CLIENT];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

dbConnect();

app.use(cors(corsOptions));
app.use(bodyParser.json({ type: "application/vnd.api+json", strict: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../public')));

app.get("/", function (req, res) {
  // const __dirname = fs.realpathSync("."); // Old way, remove this
  res.sendFile(path.join(__dirname, "/src/landing/index.html")); // Keep this, but it uses the new __dirname
});

app.use("/", authRoutes);
app.use("/me", meRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (process.env.SCHEDULE_HOUR) {
  cron.schedule(`0 */${process.env.SCHEDULE_HOUR} * * *'`, () => {
    ReseedAction();
  });
}

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
