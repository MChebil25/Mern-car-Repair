const route = require("express").Router()
const clientController = require("../controllers/clientController")
route.post("/addClient",clientController.Creatclient)
route.get("/getClient",clientController.Getclient)
route.get("/getClient/:id",clientController.getById)
route.delete("/DeleteClient/:id",clientController.DeleteId)
route.put("/ChangeClient/:id",clientController.UpdateById)
module.exports = route