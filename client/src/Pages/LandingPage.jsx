import React from "react";
import LandingPageNavbar from "../components/LandingPageNavbar"
import TextSlogan from "../components/TextSlogan";
import GetStartedButton from '../components/GetStarted';

const LandingPage = () => {
    return (
        <>
            <LandingPageNavbar />
            <TextSlogan />
            <GetStartedButton />
        </>
    )
}

export default LandingPage