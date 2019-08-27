import express from "express";
import api from "./api.json"

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(api);
});

export default router;
