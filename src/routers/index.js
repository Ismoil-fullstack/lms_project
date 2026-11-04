import staffRouter from "../routers/staff.js";
import express from "express";

const main = express.Router();

main.use("/api/v1", staffRouter);

export default main;