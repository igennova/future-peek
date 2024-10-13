import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/connect.js";
import postRoutes from "./routes/postRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/image', imageRoutes);


app.get("/", async (req, res) => {
  res.send("Hello");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on http://localhost:8080")
    );
  } catch (e) {
    console.error(e);
  }
};

startServer();
