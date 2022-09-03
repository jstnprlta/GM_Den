import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import storyRoutes from "./routes/stories.js";

const app = express();

app.use(bodyparser.json({ limit: "32mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());
app.use("/stories", storyRoutes);

const MONGO_URI =
  "mongodb+srv://GEMDEN:GMDEN123@cluster0.by0uif2.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (err) {
    console.error("connect to mongoDB failed", err.message);
  }
};

connectDB();

mongoose.connection.on("open", () =>
  console.log("Connection has been established")
);
mongoose.connection.on("error", (err) => console.log(err));
