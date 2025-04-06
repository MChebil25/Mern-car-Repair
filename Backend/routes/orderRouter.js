const route = require("express").Router()
const orderController = require("../controllers/orderController")
route.post("/addOrder",orderController.Creatorder)
route.get("/getOrder",orderController.Getorder)
route.get("/getOrder/:id",orderController.getById)
route.delete("/DeleteOrder/:id",orderController.DeleteId)
route.put("/ChangeOrder/:id",orderController.UpdateById)
module.exports = route