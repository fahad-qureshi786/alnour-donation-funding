import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Fact from "./components/Fact";
import Services from "./components/Services";
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

            <Services/>

            {/*    Team section*/}

            {/*<Team/>*/}
            <Fact/>

            {/*    Contact form*/}
            <ContactUs/>

            {/*Copywrite*/}
            <Footer/>

        </>
    );
}

export default App;
