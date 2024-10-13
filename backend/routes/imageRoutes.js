import express from "express";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from HF");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    // Here
  } catch (e) {
    console.log(e);
    res.status(500).send(error?.response.data.e.message);
  }
});

export default router;
