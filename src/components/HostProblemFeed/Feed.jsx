import React, { useState, useEffect } from "react";
import "./Feed.css"
import User from "../../img/user.svg";  
import Location from "../../img/location.svg";
import Service from "../../img/service.svg";
import { Cookies } from "react-cookie";
import axios from "axios";

function Feed() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const cookie = new Cookies();
            const NGOname = cookie.get("NGOname");
            try {
                const res = await axios.get("http://localhost:3001/getServices", {
                    params: { NGOname },
                });
                if (res.data.success) {
                    const services = res.data.services;

                    // Fetch pending problems
                    const pendingProblemsRes = await axios.get("http://localhost:3001/getPendingProblems");
                    const pendingProblems = pendingProblemsRes.data;

                    // Filter pending problems containing the service provided by the host NGO
                    const hostProblems = pendingProblems.filter(problem =>
                        services.includes(problem.service)
                    );

                    // Set the filtered problems to state
                    setProblems(hostProblems);
                } else {
                    console.log("Invalid credentials");
                }
            } catch (err) {
                console.error("Error:", err);
            }
        }
        fetchData();
    }, []);
    
    return (
    <div className="FeedContainer">
        <div>
            <h1 style={{textAlign : "left"}}>Problems Feed :</h1>
        </div>
        {problems.length > 0 ? (
            problems.map((problem, index) => (
                <div className="FeedContent" key={index}>
                    <div>
                        <img src={User} alt="User" height="300px" width="300px"/>
                    </div>
                    <div style={{display: "block"}}>
                        <div>
                            <h1 style={{textAlign: "left"}}>{problem.ProblemHeading}</h1>
                        </div>
                        <div style={{display: "flex", gap: "60px"}}>
                            <div style={{display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                <div><img src={Location} alt="Location" height="30px" width="30px" /></div>
                                <div><p style={{fontWeight: "bolder", fontSize: "30px"}}>{problem.area}</p></div>
                            </div>
                            <div style={{display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                <div><img src={Service} alt="Location" height="30px" width="30px" /></div>
                                <div><p style={{fontWeight: "bolder", fontSize: "30px"}}>{problem.service}</p></div>
                            </div>
                            <div style={{display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                <div><img src={User} alt="Location" height="30px" width="30px" /></div>
                                <div><p style={{fontWeight: "bolder", fontSize: "30px"}}>{problem.user}</p></div>
                            </div>
                        </div>
                        <div><p style={{fontWeight: "bolder", textAlign: "left", fontSize: "18px"}}>{problem.description}</p></div>
                    </div>
                </div>
            ))
        ) : (
            <div>Loading...</div>
        )}
    </div>
);

}

export default Feed;
