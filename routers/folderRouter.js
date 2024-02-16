const { Router } = require("express");
const FolderController = require("../controllers/folderController.js");

const router = Router();

router.get("/folders", FolderController.getAll);
router.post("/folders/delete", FolderController.deleteFolder);
router.post("/folders/add", FolderController.addFolder);
router.post("/folders/edit", FolderController.renameFolder);

module.exports = router;