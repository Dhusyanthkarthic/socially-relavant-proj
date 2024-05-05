const express = require("express")
const app = express()
const { createServer } = require("http");
const cors = require("cors")
app.use(cors())
const mongoose = require("mongoose")
const { Server } = require('socket.io');


const server = createServer(app);
const io = new Server(4000, {
    cors: [
        {
            origin:"http://localhost:3000",
            methods:["GET","POST"]
        }
    ]
});


mongoose.connect("mongodb+srv://hari:hari@srp.b8rbbv3.mongodb.net/?retryWrites=true&w=majority&appName=srp")
.then(()=> {
    console.log("Connected Successfully")
})
.catch((err) => {
    console.log("Error : ", err)
})


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("JOIN_ROOM", (roomid) => {
        socket.join(roomid);
    })

    socket.on("send", ({msg, user, roomid}) => {
        console.log("received", msg)
        io.to(roomid).emit("receive", {msg,user})
    })

});

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
});

app.get("/getNGOName", async (req, res) => {
    const  email  = req.query.name;
    console.log("ngo name called", req.query)
    try {
        const hostDetails = await collection.findOne({ email: email });

        if (hostDetails) {
            res.json({ NGOName: hostDetails.NGOName, success:true });
        } else {
            res.status(404).json({ error: "No host details found for the provided email" });
        }
    } catch (error) {
        console.error("Error fetching host details:", error);
        res.status(500).json({ error: "Failed to fetch host details" });
    }
});

app.get("/getUserName", async (req, res) => {
    var email = req.query.name;
    try {
        const UserDetails = await collection1.findOne({ Email: email });

        if (UserDetails) {
            res.json({ Firstname: UserDetails.Firstname, Lastname: UserDetails.Lastname, success: true });
        } else {
            res.status(404).json({ error: "No host details found for the provided email" });
        }
    } catch (error) {
        console.error("Error fetching host details:", error);
        res.status(500).json({ error: "Failed to fetch host details" });
    }
});


app.get("/getServices", async (req, res) => {
    var ngoname = req.query.NGOname;
    // var name = "Growmore";
    console.log( "NGoname  : " + ngoname);
    try {
        const HostDetails = await collection.findOne({ NGOName: ngoname });

        if (HostDetails) {
            console.log("Services Data");
            const services = [
                HostDetails.services1,
                HostDetails.services2,
                HostDetails.services3,
                HostDetails.services4,
                HostDetails.services5,
                HostDetails.services6
            ];
            console.log(services);
            res.json({ services, success: true });
        } else {
            res.status(404).json({ error: "No host details found for the provided NGO name" });
        }
    } catch (error) {
        console.error("Error fetching host details:", error);
        res.status(500).json({ error: "Failed to fetch host details" });
    }
});



app.get("/checkdata", async (req, res) => {
    const { name, pwd } = req.query;

    try {
        const user = await LoginCollection.findOne({ username: name, password: pwd });
        if (user) {
            res.json({ success: true, type: user.Type });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});


// Update your "/checkdata" endpoint to handle host login

const ProblemsComposed = new mongoose.Schema({
    ProblemHeading : {
        type : String, 
        required : true
    }, 
    area : {
        type : String, 
        required : true
    },
    service : {
        type : String,
        required : true
    },
    user : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    file_url : {
        type : String,
        required : true
    },
    ProblemStatus : {
        type : String,
        required : true
    },
    HostStatus : {
        type : String,
        required : true
    },
    NGOName : {
        type : String,
        required : true
    }
})

const ProblemCollection = new mongoose.model("ComposedProblems", ProblemsComposed)

app.get("/storeComposedProblems" , async (req, res) => {
    var ProblemHeading = req.query.ProblemHeading;
    var area = req.query.area;
    var service = req.query.service;
    var user  = req.query.user;
    var description = req.query.description;
    var file_url = req.query.file;
    var ProblemStatus = req.query.ProblemStatus;
    var HostStatus = "none";
    var NGOName = "none";

    const Problem = new ProblemCollection({ProblemHeading : ProblemHeading, area : area, service : service, user : user, description : description, file_url , ProblemStatus : ProblemStatus, HostStatus : HostStatus, NGOName : NGOName });
    await Problem.save()
    res.json({success: true})
})

app.post("/acceptProblem", async (req, res) => {
    const problemId = req.query.problemId;
    const NGOName = req.query.NGOname;

    try {
        const problem = await ProblemCollection.findById(problemId);
        if (!problem) {
            return res.status(404).json({ success: false, message: "Problem not found" });
        }

        problem.HostStatus = "Accept";
        problem.ProblemStatus = "pending";
        problem.NGOName = NGOName;

        await problem.save();

        res.status(200).json({ success: true, message: "Problem accepted successfully" });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.post("/problemNotSatisfied", async (req, res) => {
    const problemId = req.query.problemId;
    const username = req.query.username;

    try {
        const problem = await ProblemCollection.findById(problemId);
        if (!problem) {
            return res.status(404).json({ success: false, message: "Problem not found" });
        }

        problem.HostStatus = "none";
        problem.ProblemStatus = "0";
        problem.NGOName = "none";

        await problem.save();

        res.status(200).json({ success: true, message: "Problem accepted successfully" });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


app.get("/getProblem", async (req, res) => {
    const problemId = req.query.problemId;
    console.log(problemId);
    try{
        const problem = await ProblemCollection.findById( problemId );
        if (!problem) {
            return res.status(404).json({ success: false, message: "Problem not found" });
        }
        console.log(problem);
        res.json(problem);
    }catch(error){
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

app.post("/CompletedProblem", async (req, res) => {
    const problemId = req.query.problemId;
    const NGOName = req.query.NGOname;

    try {
        const problem = await ProblemCollection.findById(problemId);
        if (!problem) {
            return res.status(404).json({ success: false, message: "Problem not found" });
        }

        problem.HostStatus = "Accept";
        problem.ProblemStatus = "completed";
        problem.NGOName = NGOName;

        await problem.save();

        res.status(200).json({ success: true, message: "Problem accepted successfully" });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})


app.get("/getPendingProblems", async (req, res) => {
    const NGOName = req.query.user;
    try {
      const pendingProblems = await ProblemCollection.find({ ProblemStatus: "0" });
      res.json(pendingProblems);
    } catch (error) {
      console.error("Error fetching pending problems:", error);
      res.status(500).json({ error: "Failed to fetch pending problems" });
    }
});


app.get("/getPendingProblemsNGO", async (req, res) => {
    const NGOName = req.query.NGOname;
    try {
      const pendingProblems = await ProblemCollection.find({ ProblemStatus: { $ne : "0"} , NGOName : NGOName});
      res.json(pendingProblems);
    } catch (error) {
      console.error("Error fetching pending problems:", error);
      res.status(500).json({ error: "Failed to fetch pending problems" });
    }
});

app.get("/getPendingProblemsUser", async (req, res) => {
    const username = req.query.username;
    try {
      const pendingProblems = await ProblemCollection.find({ ProblemStatus: { $ne: "0" } , user : username});
      res.json(pendingProblems);
    } catch (error) {
      console.error("Error fetching pending problems:", error);
      res.status(500).json({ error: "Failed to fetch pending problems" });
    }
});



app.get("/getUserComposedProblems", async (req, res) => {
    const user = req.query.user;
    try{
        const UserProblems = await ProblemCollection.find({ user : user });
        res.json(UserProblems);
        console.log(user);
    } catch( error ){
        console.error("Error fetching pending problems:", error);
        res.status(500).json({ error: "Failed to fetch pending problems" });
    }
});

app.get("/getUserPendingProblems", async (req, res) => {
    const user = req.query.user;
    const ProblemStatus = "pending";
    try{
        const UserProblems = await ProblemCollection.find({ user : user , ProblemStatus });
        res.json(UserProblems);
        console.log(user);
    } catch( error ){
        console.error("Error fetching pending problems:", error);
        res.status(500).json({ error: "Failed to fetch pending problems" });
    }
});

app.get("/getCompletedProblemUser", async (req, res) => {
    const user = req.query.user;
    const ProblemStatus = "completed";
    try{
        const UserProblems = await ProblemCollection.find({ user : user , ProblemStatus });
        res.json(UserProblems);
        console.log(user);
    } catch( error ){
        console.error("Error fetching pending problems:", error);
        res.status(500).json({ error: "Failed to fetch pending problems" });
    }
});

app.get("/pendingproblems", async (req, res) => {
    const NGOName = req.query.user;
    try{
        const pendingProblems = await ProblemCollection.find({ProblemStatus : "pending"});
        res.json(pendingProblems);
    }catch(error){
        console.error("Error in fetching the pending problems");
        res.status(500).json({error : "Failed to fetch pending problems"});
    }
});

app.get("/getHostPendingProblems", async (req, res) => {
    const NGOName = req.query.NGOName;
    const ProblemStatus = "pending";
    try{
        const pendingProblems = await ProblemCollection.find({ NGOName, ProblemStatus });
        res.json(pendingProblems);
    }catch(error){
        console.log("Backend Error : " + error);
        // res.status(500).json({"Failed to fetch pending problems"});
    }
});

app.get("/getHostCompletedProblems", async (req, res) => {
    const NGOName = req.query.NGOName;
    const ProblemStatus = "completed";
    try{
        const pendingProblems = await ProblemCollection.find({ NGOName, ProblemStatus });
        res.json(pendingProblems);
    }catch(error){
        console.log("Backend Error : " + error);
    }
});

app.get("/getHostDetails", async (req, res) => {
    const NGOName = req.query.NGOName;
    try{
        const data = await collection.find({ NGOName });
        console.log(data);
        res.json(data);
    }catch(error){
        console.log("Backend Error : " + error);
    }
});

app.get("/getUserDetails", async (req, res) => {
    const Firstname = req.query.firstname;
    try{
        const data = await collection1.find({ Firstname });
        console.log(data);
        res.json(data);
    }catch(error){
        console.log("Backend Error : " + error);
    }
});


app.get("/changeUserGeneral", async (req, res) => {
    const Firstname = req.query.firstname;
    const firstname = req.query.Firstname;
    const lastname = req.query.lastname;
    const DOB = req.query.DOB;
    try{
        const data = await collection1.find({ Firstname });
        console.log(data);
        data.Firstname = firstname;
        data.Lastname = lastname;
        data.DOB = DOB;
        await data.save();
        res.json(data);
    }catch(error){
        console.log("Backend Error : " + error);
    }
});




app.get("/getProblemDetails", async (req, res) => {
    const { problemHeading } = req.query;

    try {
        const problemDetails = await ProblemCollection.findOne({ ProblemHeading: problemHeading });
        if (problemDetails) {
            res.json(problemDetails);
        } else {
            res.status(404).json({ error: "Problem not found" });
        }
    } catch (error) {
        console.error("Error fetching problem details:", error);
        res.status(500).json({ error: "Failed to fetch problem details" });
    }
});

app.get("/getHostProblems", async (req, res) => {
    const { services } = req.query;
    try {
        const problems = await ProblemCollection.find({ service: { $in: services.split(",") } });
        res.json(problems); 
    } catch (error) {
        console.error("Error fetching host problems:", error);
        res.status(500).json({ error: "Failed to fetch host problems" }); 
    }
});




  

app.listen(3001, () => {
    console.log("Server is listening")
})