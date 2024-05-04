import React from "react";
import UserHeader from "../UserHeader/Userheader";
import General from "./UserGeneral";
import Header from "./UserProfileHeader";


function UserProfile(){
    return (
        <div className="UserProfile">
            <UserHeader />
            <Header />
            <General />
        </div>
    );
};

export default UserProfile;