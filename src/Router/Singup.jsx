import Hero from "../componets/Hero/Hero";
import HeroImg from "../assets/2.jpg";
import Sing from "../componets/Singup/Sing";
import Navbarcompo from "../componets/Navbarcompo/Navbarcompo";
import Footer from "../componets/Footer/Footer";







function Singup() {
    return (
        <>

           
            <Hero
                cName='Hero'
                heroImg={HeroImg}
                title="Sing Up"
                btnCalss="one"

            />

            <Sing />

           
        </>
    )

}
export default Singup;