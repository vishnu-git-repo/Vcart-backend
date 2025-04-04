const USERS = require("../models/user");



async function login(req, res) {
    console.log(req.body);
    const {name, password} = req.body;
    const checkUser = await USERS.findOne({name: name, password: password});
    if(checkUser){
        return res.status(200).send({
            status : true,
            message : checkUser
        });
    }
    return res.status(200).send({
        status : false,
        message : "User not found"
    });
}


async function signin(req, res) {
    console.log(req.body);
    const {email, password} = req.body; 
    ExisitingUser = await USERS.findOne({email: email});
    if(ExisitingUser){
        return res.status(200).send({
            status : false,
            message : "User already exists"
        });
    }else{
        await USERS.create({email, password})
        .then((data)=>{res.status(200).send({
            status : true,
            message : data
        })})
        .catch( (err)=>{ 
            res.status(200)
            .send({
                status : false,
                message : err
            })
        });
    }     
}

module.exports = { login, signin };