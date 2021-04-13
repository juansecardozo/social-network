require("dotenv").config();
const express = require("express");

const config = require("../config");
const app = express();

const user = require("./components/user/network");

app.use(express.json());
app.use("/api/users", user);

app.listen(config.api.port, config.api.host, () => {
    console.log(`API listen on ${config.api.host}:${config.api.port}`);
});
