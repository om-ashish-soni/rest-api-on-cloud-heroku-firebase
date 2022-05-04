const mongoose = require('mongoose');
const {Student} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config')
const distinctStudentsRoute=async (req,res)=>{
    connect(DATABASE);
    
    const studs=await Student.distinct("name").distinct("age")
    res.json({"distinct_students":studs.length});
}
exports.route=distinctStudentsRoute