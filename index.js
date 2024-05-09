const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouters")
const { connecToMongoDB } = require("./connect");
const app = express();
const PORT = 8001;
connecToMongoDB();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded());
app.use("/",staticRoute)

app.use("/url", urlRoute);

app.listen(PORT, () => console.log("Server Started on PORT:" + PORT));
