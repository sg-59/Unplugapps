const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const Fullinforouter =require('./Router/Fullinfo')
const cors=require('cors')


dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('data base connected')
}).catch((err)=>{
    console.log(err);
})

    app.use(express.json());

    app.use('/api/unplugapp',Fullinforouter)
    app.listen(7000,()=>{
    console.log("port 7000 is connected");
}) 
   