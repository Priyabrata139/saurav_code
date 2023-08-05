// console.log("i am inside airplane-controller");
const {AirplaneService}=require('../services');
async function CreateAirplane(req,res)
{
 const response=await AirplaneService.CreateAirplane({
  modelNumber:req.body.modelNumber,
  capacity:req.body.capacity
 })
 
 return response;
}
module.exports={CreateAirplane};