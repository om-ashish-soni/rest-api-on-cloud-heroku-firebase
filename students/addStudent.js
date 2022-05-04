const mongoose = require('mongoose');
const {Student} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config');
const { add } = require('nodemon/lib/rules');
const addStudentRoute=async (req,res)=>{
    connect(DATABASE); 
    const stud=new Student(req.body);
    await stud.save().then(()=>{
        console.log("stud saved")
        res.json({"messgage":"student saved"})
    })
}
exports.route=addStudentRoute;