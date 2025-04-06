const route = require("express").Router()
const vehicleController = require("../controllers/vehicleController")
route.post("/addVehicle",vehicleController.Creatvehicle)
route.get("/getVehicle",vehicleController.Getvehicle)
route.get("/getVehicle/:id",vehicleController.getById)
route.delete("/DeleteVehicle/:id",vehicleController.DeleteId)
route.put("/ChangeVehicle/:id",vehicleController.UpdateById)
module.exports = route