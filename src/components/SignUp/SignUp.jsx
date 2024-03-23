import React, { useState, useEffect } from "react";
import Styles from "./SignUp.css";
import Email from "../../img/email.svg";
import Password from "../../img/password.svg";

function SignUp() {
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

    const [selectedOption, setSelectedOption] = useState("User");

    const handleSelectedOption = event => {
        setSelectedOption(event.target.value);
    };


    return (
        <div className="SignUpContainer" >
            <div className="SignUpContent">
                <div>
                    <div className="SelectType">
                        <div style={{display: "flex", alignItems : "center", gap : "2px"}}>
                            <input type="radio" name="type" value="User" checked={selectedOption === "User"} onChange={handleSelectedOption} />
                            <label htmlFor="user">User</label>
                        </div>
                        <div style={{display: "flex", alignItems : "center", gap : "2px"}}>
                            <input type="radio" name="type" value="Host" checked={selectedOption === "Host"} onChange={handleSelectedOption} />
                            <label htmlFor="host">Host</label>
                        </div>
                    </div>

                    {selectedOption === "Host" && (
                        <div className="HostDetails">
                            <div className="HostDetailsInfo">
                                <div className="HostDetailsHeading">
                                    <p style={{textAlign: "center"}}>NGO Details</p>
                                </div>
                                <div className="NGOName">
                                    <div>NGO Name : <input type="text" placeholder = "NGO Name" name = "NGOName" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}} /></div>  
                                    <div style={{marginTop : "10px", alignItems: "center", display : "flex", gap : "10px", justifyContent : "center"}}>
                                        <div>Address : </div>
                                        <div><textarea type="text" style={{borderRadius : "10px", border : "solid 2px",width: "359px", height: "117px" }}/></div>
                                    </div>                              
                                </div>
                                <div className="HostService">
                                    <div className="PersonalInfoHeading">
                                        <p style={{textAlign: "center"}}>NGO Services</p>
                                    </div>
                                    Services
                                </div>
                                <div className="HContactDetails">
                                    <div className="HContactDetailsHeading">
                                        <p style={{textAlign: "center"}}>NGO Contact Details</p>
                                    </div>
                                    <div style={{display : "flex", gap : "20px", flexWrap : "wrap", justifyContent : "center"}}>
                                        <div style={{display : "flex", gap : "10px", alignItems : "center"}}><p>Phone Number :</p> <input type="text" name="NGOPhoneNumber" placeholder = "Phone Number" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/></div>
                                        <div style={{display : "flex", gap : "10px", alignItems : "center"}}><p>Email Address : </p><input type="email" name="Email" placeholder = "Email Number"  style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/></div>
                                        <div style={{display : "flex", gap : "10px", alignItems : "center"}}><p>Website :</p> <input type="text" name="website" placeholder = "Website"  style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/></div>
                                        <div style={{display : "flex", gap : "10px", alignItems : "center"}}><p>Social Media : </p><input type="text" name="Social-Media" placeholder = "Social Media"  style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}}/></div>
                                    </div>
                                    <div className="NGOPhotoVerification">
                                        <div className="HNGOPhotoVerificationHeading">
                                            <p style={{textAlign: "center"}}>NGO Photo Verification</p>
                                        </div>
                                        <div>
                                            <input type="file"  style={{ padding : "20px 20px 20px 20px"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedOption === "User" && (
                        <div className="UserDetails">
                            <div className="PersonalInfo">
                                <div className="PersonalInfoHeading">
                                    <p style={{textAlign: "center"}}>Personal Info</p>
                                </div>
                                <div className="UName">
                                    <div>FirstName : <input type="text" placeholder = "First Name" name = "firstname" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}} /></div>
                                    <div>LastName : <input type="text" placeholder = "Last Name" name = "lastname" style={{height : "30px",border: "solid 2px", borderRadius : "10px"  , width : "200px",outline : "none"}} /></div>
                                </div>
                                <div className="DOB-Gender">
                                    <div>Date Of Birth : <input type="date" placeholder="DOB" style={{height : "30px", width : "200px", border: "solid 2px", borderRadius : "10px" ,outline : "none"}} /></div>
                                    <div style={{display : "flex",gap : "10px"}}>
                                        Gender : 
                                        <div><input type="radio" name = "gender" /> Male</div>
                                        <div><input type="radio" name = "gender" /> Female</div>
                                        <div><input type="radio" name = "gender" /> Others</div>
                                    </div>
                                </div>
                                <div className = "Address">
                                    <div>Address : </div>
                                    <div><textarea type="text" style={{borderRadius : "10px", border : "solid 2px",width: "359px", height: "117px" }}/></div>
                                </div>
                            </div>
                            <div className="UContactDetails">
                                <div className="ContactDetailsHeading">
                                    <p style={{textAlign: "center"}}>Contact Details</p>
                                </div>
                                <div className="Email-ph">
                                    <div className="Email">
                                        <div><p>Email : </p></div>
                                        <div><input type="email" placeholder= "Email" style={{width : "200px", height: "30px",borderRadius : "10px", border : "solid 2px" }}/></div>
                                    </div>
                                    <div className="PhoneNumber">
                                        <div><p>PhoneNumber : </p></div>
                                        <div><input type="email" placeholder= "Email" style={{width : "200px", height: "30px",borderRadius : "10px", border : "solid 2px" }}/></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="UPassWord">
                                        <p style={{textAlign: "center"}}>Create Password</p>
                                    </div>
                                    <div className="Password">
                                        <div><p>Password : </p></div>
                                        <div><input type="password" placeholder= "Password" style={{width : "200px", height: "30px",borderRadius : "10px", border : "solid 2px" }}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div style={{marginTop : "10px"}}>
                        <button style={{height : "40px", width : "150px", borderRadius : "10px", backgroundColor : "#3A30BA", color : "white", border: "transparent", fontWeight : "bolder"}}>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="SignUpSlogan">
                <div className="SloganContainer">
                    <h1 className="Slogan">{printedSlogan}</h1>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
