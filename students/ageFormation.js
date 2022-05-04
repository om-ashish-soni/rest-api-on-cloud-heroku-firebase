const mongoose = require('mongoose');
const {Student} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config')
const ageFormationRoute=async (req,res)=>{
    connect(DATABASE);
    
    const users=await Student.aggregate([
        {
            $group:{
                _id:{age:'$age'},
                total_students:{$sum:1},
                average_age:{$avg:'$age'},
                min_age:{$min:'$age'},
                max_age:{$max:'$age'},
                total_marksheets:{$sum:'$marksheetId'}
            },
            
        },
        
    ])
    res.json(users);
}
exports.route=ageFormationRoute