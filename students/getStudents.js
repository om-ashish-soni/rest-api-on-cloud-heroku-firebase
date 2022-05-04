const mongoose = require('mongoose');
const {Student} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config')
const getStudentsRoute=async (req,res)=>{
    connect(DATABASE);
    
    const users=await Student.aggregate([{
        // $lookup: {
        //     from: "marksheets", // collection name in db
        //     localField: "marksheetId",
        //     foreignField: "marksheetId",
        //     as: "marksheet"
        // },
        $lookup: {
            from: "results", // collection name in db
            localField: "marksheetId",
            foreignField: "resultId",
            as: "result"
        },
    }])
    res.json(users);
}
exports.route=getStudentsRoute