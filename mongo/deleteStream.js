const mongo=require('./mongodb')
const {client}=require('./mongodb')
const deleteStreamRoute=(req,res)=>{
    // res.send("mongo")
    client.connect(async err => {
        if (await err) {
            console.log("Error connecting to MongoDB Cloud:\n\t" + err.toString());
        }
        try{
            console.log("Connected to the DB!");
            const collectionData = client.db("jobportal").collection("streams");
            const data=await collectionData.findOneAndDelete({"name":req.body.name})
                res.send("deleted stream : ")    
        }catch(e){
            res.json({message:e})
        }
        
        await client.close();
    });
}
exports.route=deleteStreamRoute