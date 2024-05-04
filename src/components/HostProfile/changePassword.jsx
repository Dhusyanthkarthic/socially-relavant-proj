import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import "./HostProfile.css";
import Header from "./HostProfileHeader";
import HostHeader from "../hostheader/hostheader";

function ChangePassword() {
    const [hostData, setUserData] = useState([]);

    useEffect(() => {
        const fetchForProfile = async () => {
            try {
                // const response = await axios.get("/api/user/details"); 
                // const { username, email, password } = response.data;
                // setUserData({ username, email, password });
                const cookie = new Cookies();
                const NGOName = cookie.get("NGOname");
                const response = await axios.get("http://localhost:3001/getHostDetails", {
                    params: { NGOName }
                });
                if (response.data) {
                    setUserData(response.data[0]);
                } else {
                    console.log("No pending problems found");
                }

            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchForProfile(); 
    }, []); 
    return (
        <div>
            <HostHeader />
            <Header />
            <div className="GeneralBorder">
                <div className="GeneralContainer">
                    <div className="GeneralUsername" style={{textAlign : "left"}}>
                        <p>Current Password : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input className="ProfileInput" style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} value={hostData.password} /></div>
                    </div>
                    <div className="GeneralEmail" style={{textAlign : "left"}}>
                        <p>New Password : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} /></div>
                    </div>
                    <div className="GeneralCompany" style={{textAlign : "left"}}>
                        <p>Repeat new password : </p>
                        <div style={{ border: "0.5px solid grey", width: "350px", height: "31px"  }}><input style={{ backgroundColor : "transparent" ,border: "transparent", borderRadius: "5px", width: "300px", height: "30px", outline : "none" }} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
