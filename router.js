const express = require("express");
const BatchController = require("./controller/batch");
const StreamController = require("./controller/stream");
const router = express.Router();

router.get('/files/batch', BatchController.readFileAndEdit);


router.get('/files/download/batch', BatchController.downloadFile);
router.get('/files/download/stream', StreamController.downloadFile);

module.exports = router;