const { getDocs } = require('firebase/firestore')
const con=require('../firebase/firebase')
const db=con.database
const collection=con.collection
const getDoc=con.getDoc
const getStreamRoute=async (req,res)=>{
    const snapshot=await getDocs(collection(db,"streams"))
    const streams=[]
    snapshot.forEach((doc)=>{
        streams.push(doc.data())
    })
    res.send(streams)
}
exports.route=getStreamRoute