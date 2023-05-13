import Hero from "../componets/Hero/Hero";
import HeroImg from "../assets/2.jpg";
import Contactt from "../componets/Contact/Contactt";
import Navbarcompo from "../componets/Navbarcompo/Navbarcompo";
import Footer from "../componets/Footer/Footer";






function Contact() {
    return(
        <>
     
        <Hero 
        cName='Hero'
        heroImg={HeroImg}
        title="Contact"
        btnCalss="one"
        
        />

    <Contactt />
      



        </>
    )

    }
export default Contact;