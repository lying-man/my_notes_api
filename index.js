const express = require("express");
const cors = require("cors");
const folderRoute = require("./routers/FolderRouter.js");
const noteRoute = require("./routers/NoteRouter.js");
const verification = require("./middlewares/verification.js");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(verification);

//api
app.use("/api", folderRoute);
app.use("/api", noteRoute);

app.listen(PORT, () => console.log("Server has been started"));

module.exports = app;