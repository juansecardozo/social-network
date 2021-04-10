require("dotenv").config();
const express = require("express");

const config = require("../config");
const app = express();

const user = require("./components/user/network");

app.use("/api/users", user);

app.listen(config.api.port, () => {
    console.log(`API listen on port ${config.api.port}`);
});
