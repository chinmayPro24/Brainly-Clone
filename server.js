const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const moongoose = require("mongoose");
const websiteRoutes = require("./routes/websiteRoutes");

app.use(express.static("static"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true, limit: "20mb" }));

app.use(websiteRoutes);

app.listen(port, () => {});
