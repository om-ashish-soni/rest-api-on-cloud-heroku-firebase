
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://omsoni:2498@cluster0.x1vic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
exports.client=client;
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
