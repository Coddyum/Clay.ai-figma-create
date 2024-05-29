import React from "react";
import NavBar from "../../components/common/Navbar/NavBar";
import MovingBanner from "../../components/common/TopMovingBanner/MovingBanner";
import HeroSection from "../../components/common/HeroSection/HeroSection";

function Home() {
    return(
        <>
            <NavBar/>
            <MovingBanner/>
            <HeroSection/>
        </>
    );
}

export default Home