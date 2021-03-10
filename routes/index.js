"use strict";

const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.json("Cats are fluffy").status(200);
});

module.exports = router;
