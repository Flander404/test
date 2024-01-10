const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMidddleware");

router.post("/", typeController.create);
router.get("/", typeController.getAll);
router.get("/:id", typeController.getOne);
router.delete("/:id", typeController.delete);
router.put('/:id', typeController.update)

module.exports = router;
