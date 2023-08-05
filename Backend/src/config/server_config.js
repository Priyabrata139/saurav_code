const dotenv=require('dotenv');
dotenv.config();
const serverconfig=process.env.PORT;
module.exports=serverconfig;