import Hero from "../componets/Hero/Hero";
import HeroImg from "../assets/night.jpg";
import Aboutt from "../componets/Aboutcompo/Aboutt";
import Footer from "../componets/Footer/Footer";
import Navbarcompo from "../componets/Navbarcompo/Navbarcompo";




function About() {
    return(
        <>
        
        <Hero 
        cName='Hero'
        heroImg={HeroImg}
        title="About"
        btnCalss="one"
        
        />

      <Aboutt />
 
      

        </>
    )

    }
export default About;