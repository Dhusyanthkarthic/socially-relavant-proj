import React from "react"
import Hostheader from "../hostheader/hostheader"
import HomePageHighlight from "../HostHighlightPage/HostHighlightPage"
import Service from "../Service/Service"
import HomeFeatures from "../HostFeatures/HostFeatureContent"
import Benefits from "../benefits/benefits";
import {Cookies} from "react-cookie"
import Footer from "../Footer/Footer"
import AboutBackground from "../../Assets/about-background.png";
import BannerBackground from "../../Assets/home-banner-background.png";

function hostlandingpage(){
    return (
        <div>
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <Hostheader />
            <HomePageHighlight />
            <Service />
            <HomeFeatures />
            <Benefits />
            <Footer />
        </div>
    );
}

export default hostlandingpage;