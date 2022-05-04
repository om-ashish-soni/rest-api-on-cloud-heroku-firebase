const mongoose = require('mongoose');

const connect=(database)=>{
    mongoose.connect(`mongodb://localhost:27017/${database}`,()=>{
        console.log(`connected to database ${database}`)
    });
}
exports.connect=connect;