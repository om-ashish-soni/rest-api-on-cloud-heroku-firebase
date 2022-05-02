const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
const PORT =8093
const courses=[
    {
        "name":"standard-10",
        "fees":"5400",
        "duration":"10 months"
    },
    {
        "name":"standard-12",
        "fees":"6600",
        "duration":"12 months"
    },
]
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/courses',(req,res)=>{
    res.send(courses);
})
app.listen(process.env.PORT,()=>{
    console.log("shreepad shree vallabh is blessing you on port "+PORT)
})