const handleFileUpload = async (req, res) => {
  const { originalname, mimetype, size } = req.file;
  try {
    res.json({
      name: originalname,
      type: mimetype,
      size: size
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("File upload failed");
  }
}

module.exports = {
  handleFileUpload
}