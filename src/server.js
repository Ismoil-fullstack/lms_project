import express from "express";
import { configDotenv } from "dotenv";
import fileUpload from "express-fileupload";
import main from "./routers/index.js";

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(fileUpload());
app.use(express.json());
app.use(main);

app.use((error, req, res, next) => {
    if (error.status < 500) {
        return res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));