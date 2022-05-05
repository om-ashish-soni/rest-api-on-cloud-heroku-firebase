const mongoose = require('mongoose');
const {Student} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config')
const getStudentsRoute=async (req,res)=>{
    connect(DATABASE);
    // const users=await Student.find()
    const users=await Student.aggregate([
        {
            $match:{
                name:{$in:["datt","shreepad","nrusinh","samarth"]}
            },
        },
        {
        
            $lookup: {
                from: "marksheets", // collection name in db
                localField: "marksheets",
                foreignField: "_id",
                as: "marksheets"
            },
        },
        {
            $project:{
                "name":"$name",
                "age":"$age",
                "marksheets":"$marksheets"
            }
        },
        {
            $unwind:{
                path:"$marksheets",
                preserveNullAndEmptyArrays:true
            }
        }
    ])
    res.json(users);
}
exports.route=getStudentsRoute