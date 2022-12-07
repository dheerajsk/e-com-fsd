
const users=[];


module.exports.register = (req, res)=>{
    console.log("Registration end point");
    const user = req.body;
    if(!user){
        return res.status(400).send("User couldn't be created");
    }
    users.push(user);
    console.log(users);
    res.send("User is created");
}

// Request => URL, Type[Gte, Post, Put Delete], Body is Payload.