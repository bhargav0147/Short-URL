const express = require("express");
const urlRoute = require("./routes/url");
const {connecToMongoDB} = require("./connect");
const app = express();
const PORT = 8001;
connecToMongoDB();
app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => console.log("Server Started on PORT:" + PORT));
