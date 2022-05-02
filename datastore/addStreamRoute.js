const con=require('../firebase/firebase')
const db=con.database
const collection=con.collection
const addDoc=con.addDoc
const addStreamRoute=async (req,res)=>{
    try {
        const docRef = await addDoc(collection(db, "streams"), {
          name:"training-stream",
          month:"december",
        });
        console.log("Document written with ID: ", docRef.id);
        res.send(docRef)
      } catch (e) {
        console.error("Error adding document: ", e);
        res.send("can not send doc")
      }

}
exports.route=addStreamRoute;