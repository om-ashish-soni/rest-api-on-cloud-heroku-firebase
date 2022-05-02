const courses=[
    {
        "name":"standard-10",
        "duration":"10 months",

    },
    {
        "name":"standard-12",
        "duration":"12 months",
        
    },
]
const coursesRoute=(req,res)=>{
    res.send(courses);
}
exports.route=coursesRoute