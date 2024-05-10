const User = require("../models/user");
async function handleCreateUser(req,res){
    const {name,email,password} = req.body;
    try {
        await User.create({
            name,
            email,
            password
        })
        return res.render("home")
    } catch (error) {
        
        res.status(400).json({
            status:"fail",
            error
        })
    }
    
}