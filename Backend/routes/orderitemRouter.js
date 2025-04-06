const route = require("express").Router()
const orderitemController = require("../controllers/orderitemController")
route.post("/addOrderItem",orderitemController.Creatorderitem)
route.get("/getOrderItem",orderitemController.Getorderitem)
route.get("/getOrderItem/:id",orderitemController.getById)
route.delete("/DeleteOrderItem/:id",orderitemController.DeleteId)
route.put("/ChangeOrderItem/:id",orderitemController.UpdateById)
module.exports = route