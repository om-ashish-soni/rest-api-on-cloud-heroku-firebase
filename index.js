const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const app=express()
const defaultRoute=require('./comps/default')
const coursesRoute=require('./comps/courses')
const addStreamRoute=require('./datastore/addStreamRoute')
const getStreamRoute=require('./datastore/getStreamRoute')
const con=require('./firebase/firebase')
const db=con.database
const collection=con.collection
const addDoc=con.addDoc
dotenv.config()
app.use(cors())
app.get('/',defaultRoute.route)
app.get('/courses',coursesRoute.route)
app.get('/addStream',addStreamRoute.route)
app.get('/getStreams',getStreamRoute.route)
app.get('/firebase',(req,res)=>{
    res.send("Fireabase")
})
app.listen(process.env.PORT,()=>{
    console.log("shreepad shree vallabh is blessing you on port "+process.env.PORT)
})