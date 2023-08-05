// console.log("i am inside index");
const express=require('express');
const PORT=require('./config');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const apiroutes=require('./routes/airplane-routes');
app.use('/api',apiroutes);
app.listen(PORT,()=>{
 console.log(`server is running on port:${PORT}`);
})