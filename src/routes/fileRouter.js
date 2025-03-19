const router = require("express").Router();
const fileController = require("../controllers/fileController");
const upload = require("../config/multerConfig");

router.post(
  "/fileanalyse",
  upload.single("upfile"),
  fileController.handleFileUpload
);

module.exports = router;
