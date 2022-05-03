const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')

const app=express()
const readStreamRoute=require('./mongo/readStreams')
const defaultRoute=require('./comps/default')

dotenv.config()
app.use(cors())

app.get('/',defaultRoute.route)
app.get('/mongo',readStreamRoute.route)
app.listen(process.env.PORT,()=>{
    console.log("shreepad shree vallabh is blessing you on port "+process.env.PORT)
})