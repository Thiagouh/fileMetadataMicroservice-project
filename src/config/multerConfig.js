const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "..", "..", "public", "uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.split(".")[1];
    const newFileName = require("crypto").randomBytes(64).toString("hex");
    cb(null, `${newFileName}.${fileExtension}`);
  },
});

const upload = multer({storage});

module.exports = upload;