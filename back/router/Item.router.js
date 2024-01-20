const express=require("express")
const { CardController } = require("../controller/Item.controller")

const router=express.Router()

router.get("/", CardController.getAll)
router.get("/:id", CardController.getById)
router.post("/", CardController.add)
router.delete("/:id", CardController.delete)

module.exports=router