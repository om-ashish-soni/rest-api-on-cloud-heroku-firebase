const mongoose = require('mongoose');
const {Result, Marksheet} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config');
const { add } = require('nodemon/lib/rules');
const collectResults=async (req,res)=>{
    console.log("in collect results")
    connect(DATABASE); 
    await Result.deleteMany();
    const marksheets=await Marksheet.aggregate([
        {
            $group:{
                _id:'$marksheetId',
                maths:{$sum:'$maths'},
                phy:{$sum:'$phy'},
                chem:{$sum:'$chem'},
                frequency:{$sum:1}
            },
            
        },
        
    ])
    
    marksheets.map(async marksheet=>{
        const result={}
        result.resultId=marksheet._id
        result.maths=marksheet.maths/marksheet.frequency
        result.phy=marksheet.phy/marksheet.frequency
        result.chem=marksheet.chem/marksheet.frequency
        const savedResult=new Result(result)
        await savedResult.save().then(()=>{
            console.log("result saved")
        })
    })
}
exports.manipulate=collectResults;