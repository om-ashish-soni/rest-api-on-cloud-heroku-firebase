const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:String,
    marksheetId:Number,
    std:Number,
    age:Number
})
const marksheetSchema=new mongoose.Schema({
    marksheetId:Number,
    maths:Number,
    phy:Number,
    chem:Number
})
exports.studentSchema=studentSchema
exports.marksheetSchema=marksheetSchema