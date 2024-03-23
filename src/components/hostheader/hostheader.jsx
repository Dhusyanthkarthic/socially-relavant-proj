import React from 'react'
import Styles from './hostheader.css'


function hostheader(){
    return (
        <div className="HostHeaderContainer">
            <div className="HostHeaderTitle">
                <h1>AidNet</h1>
            </div>
            <div className="HostHeaderNavigator">
                <div>
                    <p>Dashboard</p>
                </div>
                <div>
                    <p>Find Problems</p>
                </div>
                <div>
                    <p>Analysis</p>
                </div>
                <div>
                    <p>Profile</p>
                </div>
            </div>
            <div className="HostHeaderName">
                <p>Host</p>
            </div>
            <div>
                <button className = "HostDocumentation">Documentation</button>
            </div>
        </div>
    );
}

export default hostheader;