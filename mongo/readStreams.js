const mongo=require('./mongodb')
const {client}=require('./mongodb')
const readStreamRoute=(req,res)=>{
    // res.send("mongo")
    client.connect(async err => {
        if (await err) {
            console.log("Error connecting to MongoDB Cloud:\n\t" + err.toString());
        }
        console.log("Connected to the DB!");
        const collectionData = client.db("jobportal").collection("streams");
        
        try {
            const data = await collectionData.find().toArray();
            
            console.log(data);
            
            res.json({
                "total_number_of_data":data.length,
                "data":data
            });
        } catch (e) {
            res.json({message: e});
        }

        await client.close();
    });
}
exports.route=readStreamRoute