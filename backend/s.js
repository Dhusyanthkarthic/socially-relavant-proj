const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hari:hari@srp.b8rbbv3.mongodb.net/?retryWrites=true&w=majority&appName=srp")
.then(() => {
    console.log("Coneection Successful");
})

.catch((err) => {
    console.log("ERROR REASON : ",err.message);
})

const MonSignUp = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    password : {
        type: String,
        required :true
    }
})

const collection = new mongoose.model("users", MonSignUp)


app.get("/storedata", async (req, res) => {
    var name = req.query.name
    var pwd = req.query.pwd

    const user = new collection({name, password : pwd})
    await user.save();
    res.json({success: true})
})









app.listen(3001, () => {
    console.log("Server is running at port 3000")
})