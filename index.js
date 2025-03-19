const express = require("express");
const app = express();
const cors = require("cors");

const fileRouter = require("./src/routes/fileRouter");

app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", fileRouter);

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
