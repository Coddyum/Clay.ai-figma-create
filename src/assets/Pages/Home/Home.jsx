import React from "react";
import NavBar from "../../components/layout/Navbar/NavBar"
import MovingBanner from "../../components/layout/TopMovingBanner/MovingBanner";
import HeroSection from "../../components/layout/HeroSection/HeroSection";

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