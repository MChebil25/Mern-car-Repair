const route = require("express").Router()
const partController = require("../controllers/partController")
route.post("/addPart",partController.Creatpart)
route.get("/getPart",partController.Getpart)
route.get("/getPart/:id",partController.getById)
route.delete("/DeletePart/:id",partController.DeleteId)
route.put("/ChangePart/:id",partController.UpdateById)
module.exports = route