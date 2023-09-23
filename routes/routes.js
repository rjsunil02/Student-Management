const router = require("express").Router();

const {
  addOne,
  getAll,
  updateOneById,
  deleteOneById,
  deleteAll,
} = require("../controller/controler");

router.post("/addOne", addOne);
router.get("/getAll", getAll);
router.patch("/:id", updateOneById);
router.delete("/:id", deleteOneById);
router.delete("/", deleteAll);
module.exports = router;
