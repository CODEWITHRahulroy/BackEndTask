const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./routes/route");
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 4080;
const DB = process.env.DB; 

mongoose.connect(DB)
    .then(() => console.log("Database connected"))
    .catch((error) => console.error("Database connection failed:", error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
