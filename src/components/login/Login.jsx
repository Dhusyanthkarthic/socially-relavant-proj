import React, { useState, useEffect } from "react";
import Styles from "./Login.css";
import Email from "../../img/email.svg";
import Password from "../../img/password.svg";
import axios from "axios";

function Login() {
    const [printedSlogan, setPrintedSlogan] = useState("");
    const [printedSubtext, setPrintedSubtext] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {   
        const sloganText = "Your gateway to make a difference";
        const interval = setInterval(() => {
            setPrintedSlogan(sloganText.substring(0, currentIndex + 1));
            setCurrentIndex(prevIndex => prevIndex + 1);
            if (currentIndex === sloganText.length - 1) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [currentIndex]);

    async function sendData() {

        var name = document.getElementById("name").value
        var pwd = document.getElementById("pwd").value

        await axios({
            url:"http://localhost:3001/storedata",
            method: "get",
            params: {name, pwd}
        }).then((res => {
            if (res.data.success) {
                alert("data stored successfully")
            }
        }))
    }

    return (
        <div className="LoginContainer">
            <div className="LoginSlogan">
                <h1 className="Slogan">{printedSlogan}</h1>
            </div>
            <div className="LoginContent">
                <div>
                    <h1 style={{ fontSize: "80px", marginBottom: "10px" }}>Aidnet</h1>
                </div>
                <div className="Username">
                    <img src={Email} alt="Username" style={{ height: "50px", width: "50px" }} />
                    <input type="text" id="name" placeholder="Username" style={{ width: "400px", height: "50px", border: "transparent", backgroundColor: "white", outline: "none" }} />
                </div>
                <div className="Password">
                    <img src={Password} alt="Username" style={{ height: "50px", width: "50px" }} />
                    <input type="password" id="pwd" placeholder="Password" style={{ width: "400px", height: "50px", border: "transparent", outline: "none" }} />
                </div>
                <div className="LoginButton">
                    <button onClick={sendData}   style={{ width: "400px", height: "35px", color: "white", backgroundColor: "#080a47", borderRadius: "5px", marginLeft: "50px" }}>Login</button>
                </div>
                <div className="LoginOthers">
                    <input type="checkbox" />I Agree to Terms and Conditions
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "7px" }}>
                        <p>Didn't Have an account?</p><a href="../SignUp/SignUp.jsx" style={{ textDecoration: "none", color: "black" }}>Register Now!</a>
                    </div>
                    <a href="#" style={{ textDecoration: "none", color: "black" }}> Forgot Password </a>
                </div>
                <p>Don't have an account ? <a href="/signup">Signup here</a></p>
            </div>
        </div>
    );
}

export default Login;
