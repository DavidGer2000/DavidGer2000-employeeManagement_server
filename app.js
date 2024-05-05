const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const {routesInit} = require("./routes/configRoutes")
require("./data/mongoConnect")


const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(cors());


routesInit(app);

const server = http.createServer(app);
let port = process.env.PORT || "3012";
server.listen(port);