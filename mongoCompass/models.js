const mongoose=require('mongoose')
const {studentSchema,marksheetSchema} = require('../mongoCompass/schema');
const Student=new mongoose.model('Student',studentSchema);
const Marksheet=new mongoose.model('Marksheet',marksheetSchema);
exports.Student=Student;
exports.Marksheet=Marksheet;