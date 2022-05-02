const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
const PORT =8093
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT,()=>{
    console.log("shreepad shree vallabh is blessing you on port "+PORT)
})