const mongo=require('./mongodb')
const {client}=require('./mongodb')
const updateStreamRoute=(req,res)=>{
    // res.send("mongo")
    delete req.body._id
    client.connect(async err => {
        if (await err) {
            console.log("Error connecting to MongoDB Cloud:\n\t" + err.toString());
        }
        try{
            console.log("Connected to the DB!");
            const collectionData = client.db("jobportal").collection("streams");
            const data=await collectionData.findOneAndReplace({"name":req.body.name},req.body,{ "upsert": true, "returnNewDocument": true })
            res.send("update stream : "+req.body)    
        }catch(e){
            res.json({message:e})
        }
        
        await client.close();
    });
}
exports.route=updateStreamRoute