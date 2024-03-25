const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://hari:hari@srp.b8rbbv3.mongodb.net/?retryWrites=true&w=majority&appName=srp")
.then(()=> {
    console.log("Connected Successfully")
})
.catch((err) => {
    console.log("Error : ", err)
})

const UserDetails = new mongoose.Schema({
    Firstname : {
        type : String,
        required : true
    },
    Lastname : {
        type : String,
        required : true
    },
    DOB : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    Address : {
            type : String,
            required : true
    },
    Email : {
        type : String,
        required : true
    },
    Phonenumber : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    Type : {
        type : String,
        required : true
    }
})

var collection1  = new mongoose.model("UserDetails", UserDetails)



const LoginDetails = new mongoose.Schema({
    username : {
        type : String,
        required : true
    }, 
    password : {
        type : String,
        required : true
    },
    Type : {
        type : String, 
        required : true
    }
})

var LoginCollection = new mongoose.model("LoginDetails", LoginDetails)


app.get("/storeuserdata", async (req, res) => {

    var firstname = req.query.firstname
    var lastname = req.query.lastname
    var DOB = req.query.DOB
    var gender = req.query.gender
    var Address = req.query.Address
    var email = req.query.email
    var phonenumber = req.query.phonenumber
    var password = req.query.password
    var Type = req.query.user

    const user = new collection1({Firstname : firstname,Lastname : lastname , DOB,gender,Address,  Email : email, Phonenumber: phonenumber, password : password,Type : Type})
    const Login = new LoginCollection({username : email, password : password, Type : Type});

    const statt = await Login.save()
    console.log("are you here ? ")
    console.log(statt)
    await user.save()

    res.json({success: true})
})


const HostDetails = new mongoose.Schema({
    NGOName : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    Phonenumber : {
        type : String,
        required : true
    },
    email : {
            type : String,
            required : true
    },
    website : {
        type : String,
        required : true
    },
    socialmedia : {
        type : String,
        required : true
    },
    area1 : {
        type : String,
        required : true
    },
    area2 : {
        type : String,
        required : true
    },
    area3 : {
        type : String,
        required : true
    },
    area4 : {
        type : String,
        required : true
    },
    area5 : {
        type : String,
        required : true
    },
    area6 : {
        type : String,
        required : true
    },
    services1 : {
        type: String,
        required : true
    },
    services2 : {
        type: String,
        required : true
    },
    services3 : {
        type: String,
        required : true
    },
    services4 : {
        type: String,
        required : true
    },
    services5 : {
        type: String,
        required : true
    },
    services6 : {
        type: String,
        required : true
    },
    Type : {
        type: String,
        required : true
    }
    
})

collection  = new mongoose.model("HostDetails", HostDetails)

app.get("/storehostdata", async (req, res) => {
    var ngoname = req.query.ngoname
    var address = req.query.Address
    var phonenumber = req.query.phonenumber
    var email = req.query.email
    var websitelink = req.query.websitelink
    var socialmedialink = req.query.socialmedialink
    var area1 = req.query.area1
    var area2 = req.query.area2
    var area3 = req.query.area3
    var area4 = req.query.area4
    var area5 = req.query.area5
    var area6 = req.query.area6
    var services1 = req.query.services1
    var services2 = req.query.services2
    var services3 = req.query.services3
    var services4 = req.query.services4
    var services5 = req.query.services5
    var services6 = req.query.services6
    var password = req.query.password
    var host = req.query.host;

    // const user = new collection({NGOName : ngoname,Address : address , password ,Phonenumber : phonenumber,email,website : websitelink,socialmedia : socialmedialink, area1, area2, area3, area4, area5, area6, services1, services2, services3, services4, services5, services6})
    const user = new collection({
        NGOName: ngoname,
        Address: address,
        password: password, 
        Phonenumber: phonenumber,
        email: email,
        website: websitelink,
        socialmedia: socialmedialink,
        area1: area1,
        area2: area2,
        area3: area3,
        area4: area4,
        area5: area5,
        area6: area6,
        services1: services1,
        services2: services2,
        services3: services3,
        services4: services4,
        services5: services5,
        services6: services6,
        Type : host
    });    

    const Login = new LoginCollection({username : email, password : password, Type : host});
    await Login.save()
    await user.save();
    res.json({success: true})
})


app.listen(3001, () => {
    console.log("Server is listening")
})