// console.log("i am inside airplane-service");
const {AirplaneRepository}=require('../repositories');
const airplanerepository=new AirplaneRepository();
async function CreateAirplane(data)
{
 try {
  const response=await airplanerepository.create(data);
 return response;
 } catch (error) {
    console.log('error=', error);
    throw error;
 }
}
module.exports={CreateAirplane};