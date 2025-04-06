const route = require("express").Router()
const mechanicController = require("../controllers/mechanicController")
route.post("/addMechanic",mechanicController.Creatmechanic)
route.get("/getMechanic",mechanicController.Getmechanic)
route.get("/getMechanic/:id",mechanicController.getById)
route.delete("/DeleteMechanic/:id",mechanicController.DeleteId)
route.put("/ChangeMechanic/:id",mechanicController.UpdateById)
module.exports = route