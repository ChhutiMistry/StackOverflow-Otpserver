require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 6020;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT,()=>{
    console.log(`Server started at Port No. ${PORT}`)
})
