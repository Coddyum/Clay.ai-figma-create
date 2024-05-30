import HeroSection from "../../components/layout/HeroSection/HeroSection";
import MovingBanner from "../../components/layout/TopMovingBanner/MovingBanner";
import NavBar from "../../components/layout/Navbar/NavBar"

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
