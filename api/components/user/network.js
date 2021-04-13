const express = require("express");
const ValidationError = require("../../../errors/ValidationError");
const response = require("../../../network/response");
const router = express.Router();
const Controller = require("./index");

router.get("/", (req, res) => {
    Controller.list()
        .then((users) => {
            response.success(req, res, users);
        })
        .catch((e) => {
            response.error(req, res, "Internal server error", e);
        });
});

router.get("/:id", (req, res) => {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user);
        })
        .catch((e) => {
            response.error(req, res, "Internal server error", e);
        });
});

router.post("/", (req, res) => {
    Controller.add(req.body.name)
        .then((user) => {
            response.success(req, res, user);
        })
        .catch((e) => {
            if (e instanceof ValidationError) {
                response.fail(req, res, e.data, 422);
            } else {
                response.error(req, res, "Internal server error", e);
            }
        });
});

module.exports = router;
