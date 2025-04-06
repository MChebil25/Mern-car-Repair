const route = require("express").Router()
const paymentController = require("../controllers/paymentController")
route.post("/addPayment",paymentController.Creatpayment)
route.get("/getPayment",paymentController.Getpayment)
route.get("/getPayment/:id",paymentController.getById)
route.delete("/DeletePayment/:id",paymentController.DeleteId)
route.put("/ChangePayment/:id",paymentController.UpdateById)
module.exports = route