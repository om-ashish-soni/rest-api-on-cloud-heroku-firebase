const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    marksheets: [{
        type: mongoose.Types.ObjectId,
        ref: 'Marksheet'
    }],
    std:{
        type:Number,
        min:1,
        max:12
    },
    age:{
        type:Number,
        min:1,
        max:120
    }
})
const marksheetSchema=new mongoose.Schema({
    maths:{
        type:Number,
        min:1,
        max:100
    },
    phy:{
        type:Number,
        min:1,
        max:100
    },
    chem:{
        type:Number,
        min:1,
        max:100
    }
})
const resultSchema=new mongoose.Schema({
    resultId:{
        type:Number,
    },
    maths:{
        type:Number,
        min:1,
        max:100
    },
    phy:{
        type:Number,
        min:1,
        max:100
    },
    chem:{
        type:Number,
        min:1,
        max:100
    }
})
const tokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true
    },
})
exports.studentSchema=studentSchema
exports.marksheetSchema=marksheetSchema
exports.resultSchema=resultSchema
exports.tokenSchema=tokenSchema