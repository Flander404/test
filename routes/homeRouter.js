const Router = require("express");
const router = new Router();
const homeController = require("../controllers/homeController");

router.post("/", homeController.create);
router.get("/", homeController.getAll);
router.get("/:id", homeController.getOne);
router.delete("/:id", homeController.delete);

module.exports = router;