import React from "react";
import HomeFromPage from "../HostProfile/HostFrontPage";
import General from "../HostProfile/General";
import Header from "../hostheader/hostheader";


function HostProfile(){
    return (
        <div>
            <Header />
            <HomeFromPage />
            <General />
        </div>
    );
};

export default HostProfile;