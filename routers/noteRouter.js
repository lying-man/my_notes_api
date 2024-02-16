const { Router } = require("express");
const NoteController = require("../controllers/noteController.js");

const router = new Router();

router.get("/folders/:id", NoteController.getAll);
router.post("/folders/note/delete", NoteController.deleteNote);
router.post("/folders/note/add", NoteController.addNote);
router.post("/folders/note/edit", NoteController.editNote);

module.exports = router;