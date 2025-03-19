const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.split(".")[1];
    const newFileName = require("crypto").randomBytes(64).toString("hex");
    cb(null, `${newFileName}.${fileExtension}`);
  },
});

const upload = multer({storage});

module.exports = upload;