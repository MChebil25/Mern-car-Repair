const route = require("express").Router()
const userController = require("../controllers/userController")
route.post("/addUser",userController.Creatuser)
route.get("/getUser",userController.Getuser)
route.get("/getUser/:id",userController.getById)
route.delete("/DeleteUser/:id",userController.DeleteId)
route.put("/ChangeUser/:id",userController.UpdateById)
module.exports = route