// imports section
const express=require('express')
const cors=require('cors')
const cron=require('node-cron')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const app=express()
const readStreamRoute=require('./mongo/readStreams')
const addStreamRoute=require('./mongo/addStream')
const deleteStreamRoute=require('./mongo/deleteStream')
const updateStreamRoute=require('./mongo/updateStream')
const aggregateStreamRoute=require('./mongo/aggregateStream')
const getStudentsRoute=require('./students/getStudents')
const addStudentRoute=require('./students/addStudent')
const ageFormationRoute=require('./students/ageFormation')
const sortByAgeRoute=require('./students/sortByAge')
const distinctStudentsRoute=require('./students/distinctStudents')
const addMarksheetRoute=require('./marksheets/addMarksheet')
const cronJob=require('./results/collectResults')
const defaultRoute=require('./comps/default')
const authJWTRoute=require('./jwt/authJWTRoute')
const {authJWTMiddleware}=require('./jwt/authJWTMiddleware')
const {middleware,authMiddleware}=require('./middleware/middleware')
//cron jobs 
cron.schedule('0 0 0 * * *', () => {
    console.log('running every midnight at 12 am');
    cronJob.manipulate();
});

//configs
dotenv.config()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware)
//request mappings

app.get('/',defaultRoute.route)
app.get('/readStreams',readStreamRoute.route)
app.post('/addStream',addStreamRoute.route)
app.delete('/deleteStream',deleteStreamRoute.route)
app.put('/updateStream',updateStreamRoute.route)
app.get('/aggregateStream',aggregateStreamRoute.route)
app.get('/getStudents',authMiddleware,authJWTMiddleware,getStudentsRoute.route)
app.post('/addStudent',addStudentRoute.route)
app.get('/ageFormation',ageFormationRoute.route)
app.get('/sortByAge',sortByAgeRoute.route)
app.get('/distinctStudents',distinctStudentsRoute.route)
app.post('/addMarksheet',addMarksheetRoute.route)
app.post('/login',authJWTRoute.route)
// app.get('/getMarksheets',getMarksheets.route)

app.listen(process.env.PORT,()=>{
    console.log("shreepad shree vallabh is blessing you on port "+process.env.PORT)
})