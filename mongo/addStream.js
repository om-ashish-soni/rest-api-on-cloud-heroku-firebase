const mongo=require('./mongodb')
const {client}=require('./mongodb')
const addStreamRoute=(req,res)=>{
    // res.send("mongo")
    client.connect(async err => {
        if (await err) {
            console.log("Error connecting to MongoDB Cloud:\n\t" + err.toString());
        }
        try{
            console.log("Connected to the DB!");
            const collectionData = client.db("jobportal").collection("streams");
            const {insertedId}=await collectionData.insertOne(req.body)
            const data=await collectionData.findOne({"name":req.body.name})
            console.log(insertedId,data)
            res.json(data)    
        }catch(e){
            res.json({message:e})
        }
        
        await client.close();
    });
}
exports.route=addStreamRoute