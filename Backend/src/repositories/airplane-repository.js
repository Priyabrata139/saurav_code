// console.log("i am inside airplanerepo");
const CrudRepository=require('./crud-repository');
// const CrudRepository=new CrudRepository;
const {Airplane}=require('../models');
// console.log(Airplane);
class AirplaneRepository extends CrudRepository
{
 constructor(){
  super(Airplane);
 }
 
}

module.exports=AirplaneRepository;