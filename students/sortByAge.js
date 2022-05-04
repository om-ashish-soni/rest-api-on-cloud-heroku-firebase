const mongoose = require('mongoose');
const {Student} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config')
const ageFormationRoute=async (req,res)=>{
    connect(DATABASE);
    
    const users=await Student.aggregate([
        
        {$match:{
            'age':{
                $gt:5
            }
        }},
        {$sort:{'age':1}},
        {$limit:3},
        
    ])
    res.json(users);
}
exports.route=ageFormationRoute