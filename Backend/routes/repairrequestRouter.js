const route = require("express").Router()
const repairrequestController = require("../controllers/repairrequestController")
route.post("/addRepairRequest",repairrequestController.Creatrepairrequest)
route.get("/getRepairRequest",repairrequestController.Getrepairrequest)
route.get("/getRepairRequest/:id",repairrequestController.getById)
route.delete("/DeleteRepairRequest/:id",repairrequestController.DeleteId)
route.put("/ChangeRepairRequest/:id",repairrequestController.UpdateById)
module.exports = route