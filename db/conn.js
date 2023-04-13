const DB = process.env.DATABASE;

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect (DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected"))
.catch((error)=>{
    console.log("error",error);
})