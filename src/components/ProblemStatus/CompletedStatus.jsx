import React, { useState, useEffect } from "react";
import Header from "../hostheader/hostheader";
import "../ProblemStatus/ProblemStatus.css";
import  "../HostProblemFeed/Feed.css";
import { Cookies } from "react-cookie";
import axios from "axios";
import User from "../../img/user.svg";
import Location from "../../img/location.svg";
import Service from "../../img/service.svg";

function CompletedStatus() {

    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try{
            const cookie = new Cookies();
            const NGOName = cookie.get("NGOname");
            const response = await axios.get("http://localhost:3001/getHostCompletedProblems", {
                params: { NGOName }
            });
            console.log(NGOName);

            if (response.data) {
                setProblems(response.data);
            } else {
                console.log("No pending problems found");
            }
        }catch(error){
            console.error("Error:", error);
        }
    };
    
    
    return (
        <div>
            <Header />
            <div className="ProblemStatusButton">
                <div>
                    <a href="/problemstatus"><button className="ButtonStatus">Pending Problems</button></a>
                </div>
                <div>
                    <a href="/completedstatus"><button className="ButtonStatus">Completed Problems</button></a>
                </div>
            </div>
            <div className="FeedContainer">
                <div>
                    <h1 style={{ textAlign: "left" }}>Problems Feed :</h1>
                </div>
                {problems.length > 0 ? (
                    problems.map((problem, index) => (
                        <div className="FeedContent" key={index}>
                            <div>
                                <img src={User} alt="User" height="300px" width="300px" />
                            </div>
                            <div style={{ display: "block" }}>
                                <div className="ProblemFeedChoice">
                                    <div>
                                        <h1 style={{ textAlign: "left", color: "white" }}>{problem.ProblemHeading}</h1>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "60px" }}>
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                        <div><img src={Location} alt="Location" height="30px" width="30px" /></div>
                                        <div><p style={{ fontWeight: "bolder", fontSize: "120%", color: "white" }}>{problem.area}</p></div>
                                    </div>
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                        <div><img src={Service} alt="Location" height="30px" width="30px" /></div>
                                        <div><p style={{ fontWeight: "bolder", fontSize: "120%", color: "white" }}>{problem.service}</p></div>
                                    </div>
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center", paddingBottom: "20px" }}>
                                        <div><img src={User} alt="Location" height="30px" width="30px" /></div>
                                        <div><p style={{ fontWeight: "bolder", color: "white", fontSize: "120%" }}>{problem.user}</p></div>
                                    </div>
                                </div>
                                <div><p style={{ fontWeight: "bolder", textAlign: "left", fontSize: "18px", color: "white" }}>{problem.description}</p></div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <h1>No Completed Problems</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CompletedStatus;
