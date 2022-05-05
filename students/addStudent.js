const mongoose = require('mongoose');
const {Student} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config');
const { add } = require('nodemon/lib/rules');
const ObjectId=mongoose.Types.ObjectId;
const addStudentRoute=async (req,res)=>{
    connect(DATABASE);
    const raw=req.body;
    const marksheets=[];
    raw.marksheets.map((m_id)=>{
        marksheets.push(new ObjectId(m_id))
    })
    raw.marksheets=marksheets;
    const stud=new Student(raw);
    console.log(marksheets);
    console.log(stud);
    await stud.save(
        (err,result)=>{
            if(err){
                console.log("error occured");
                res.json({
                    "message":"error while saving",
                    "details":err
                })
            }
            else{
                console.log("stud saved")
                res.json({"student":stud})
            }
        }
    )
}
exports.route=addStudentRoute;