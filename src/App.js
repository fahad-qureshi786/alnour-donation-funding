import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Donate from "./components/Donate";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            {/*Calling Header component*/}
            <Header/>

            {/*    Hero section*/}

            <HeroSection/>
            {/*About Alnour*/}
            <AboutUs/>

            {/*    Fact section*/}

            {/*<Fact/>*/}
            {/*    Services*/}

            <HowItWorks/>

            {/*    Team section*/}

            {/*<Team/>*/}
            <Donate/>

            {/*    Contact form*/}
            <ContactUs/>

            {/*Copywrite*/}
            <Footer/>

        </>
    );
}

export default App;
