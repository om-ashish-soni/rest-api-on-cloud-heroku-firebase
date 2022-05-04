const { Collection } = require('mongodb');
const mongo=require('./mongodb')
const {client}=require('./mongodb')
const agg = [
    {
      '$group': {
        '_id': '$_id', 
        'max_days': {
          '$max': '$days'
        }
      }
    }
  ];
const aggregateStreamRoute=(req,res)=>{
    console.log(client);
    client.connect(async err => {
        if (await err) {
            console.log("Error connecting to MongoDB Cloud:\n\t" + err.toString());
        }
        console.log("Connected to the DB!");
        try{

            const collectionData = client.db("jobportal").collection("streams");
            collectionData.aggregate(agg,(error,result)=>{
                console.log("result",result);
            })
        }catch(e){
            console.log("error : ",e);
        }
        
        await client.close();
    });
    // console.log(agg);
    res.send("hello world")
}

exports.route=aggregateStreamRoute

