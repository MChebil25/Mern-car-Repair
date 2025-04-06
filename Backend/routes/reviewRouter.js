const route = require("express").Router()
const reviewController = require("../controllers/reviewController")
route.post("/addReview",reviewController.Creatreview)
route.get("/getReview",reviewController.Getreview)
route.get("/getReview/:id",reviewController.getById)
route.delete("/DeleteReview/:id",reviewController.DeleteId)
route.put("/ChangeReview/:id",reviewController.UpdateById)
module.exports = route