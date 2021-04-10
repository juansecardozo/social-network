const express = require("express");
const response = require("../../../network/response");
const router = express.Router();
const Controller = require("./index");

router.get("/", (req, res) => {
    const users = Controller.list();
    response.success(req, res, users);
});

router.get("/:id", (req, res) => {
    const user = Controller.get(req.params.id);
    response.success(req, res, user);
});

module.exports = router;
