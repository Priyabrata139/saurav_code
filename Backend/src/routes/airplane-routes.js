// console.log("i am inside airplane-routes");
const express=require('express');
const AirplaneRouter=express.Router();
const {AirplaneController}=require('../controllers');
AirplaneRouter.post('/createairplane',AirplaneController.CreateAirplane);

module.exports=AirplaneRouter;