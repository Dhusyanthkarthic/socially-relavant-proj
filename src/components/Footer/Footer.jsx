// Footer.js
import React from "react";
import "./Footer.css"; // Correct import path to the CSS file

function Footer() {
    return (
        <div  className="FooterContainer" style={{marginBottom : "30px",display: "flex", gap : "100px", alignItems : "center", justifyContent: "center"}}>
            <div>
                <h2 style={{color : "black", fontWeight : "700", fontSize : "40px"}}>AidNet</h2>
            </div>
            <div style={{lineHeight : "1", textAlign : "center"}}>
                <div style={{marginBottom : "30px"}}>
                    <h2>Company</h2>
                </div>
                <div>
                    <p>Home</p>
                    <p>About</p>
                    <p>Pricing</p>
                    <p>Contact </p>
                </div>
            </div>
            <div style={{lineHeight : "1", textAlign : "center"}}>
                <div style={{marginBottom : "30px"}}>
                    <h2>Help</h2>
                </div>
                <div>
                    <p>Support</p>
                    <p>Blog</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy & Policy </p>
                </div>
            </div>
            <div style={{lineHeight : "1", textAlign : "center"}}>
                <div style={{marginBottom : "30px"}}>
                    <h2>Resources</h2>
                </div>
                <div>
                    <p>FreeBooks</p>
                    <p>Development Tutorial</p>
                    <p>How To Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>
            <div style={{lineHeight : "1", textAlign : "center"}}>
                <div style={{marginBottom : "30px"}}>
                    <h2>Links</h2>
                </div>
                <div>
                    <p>BlazeX</p>
                    <p>CharityX</p>
                    <p>Devton</p>
                    <p>Dover </p>
                </div>
            </div>
            <div>
                <div>
                    Social Media Links in Progress
                </div>
                <div>
                    <p style={{fontWeight : "700"}}>Any Query Email Us</p>
                    <div>
                        <input type="text" style={{width : "200px", height : "30px", borderRadius : "10px"}} />
                        <button style={{marginLeft : "10px", padding: "10px 10px 10px 10px", backgroundColor :"rgb(58, 48, 186)", borderRadius : "10px", color : "white", fontWeight : "700", border : "transparent"}}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
