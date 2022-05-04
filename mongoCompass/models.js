const mongoose=require('mongoose')
const {studentSchema,marksheetSchema,resultSchema} = require('../mongoCompass/schema');
const Student=new mongoose.model('Student',studentSchema);
const Marksheet=new mongoose.model('Marksheet',marksheetSchema);
const Result=new mongoose.model('Result',resultSchema);
exports.Student=Student;
exports.Marksheet=Marksheet;
exports.Result=Result;