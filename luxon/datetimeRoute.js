const {DateTime,Interval}=require('luxon')
exports.route=(req,res)=>{
    const zone=req.body.zone
    const result={}
    const zoneTime=DateTime.local().setZone(zone)
    result["local"]=DateTime.local().toFormat('y-M-d HH:mm:ss')
    result["zone"]=zoneTime.toFormat('y-M-d HH:mm:ss')
    result["before-30-seconds"]=zoneTime.minus({seconds:5}).toFormat('y-M-d HH:mm:ss')
    result["before-5-minutes"]=zoneTime.minus({minutes:5}).toFormat('y-M-d HH:mm:ss')
    result["yesterday"]=zoneTime.minus({days:1}).toFormat('y-M-d HH:mm:ss')
    result["beforeweek"]=zoneTime.minus({days:7}).toFormat('y-M-d HH:mm:ss')
    result["from-iso-to-local-zone"]=DateTime.fromISO(new Date().toISOString()).setZone(zone).toFormat('y-M-d HH:mm:ss')
    result["interval-since-last-5-minutes"]=Interval.fromDateTimes(zoneTime.minus({minutes:5}),zoneTime)
    
    res.json({
        "datetime":result
    })
}