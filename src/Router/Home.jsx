import Hero from "../componets/Hero/Hero";
import HeroImg from "../assets/12.jpg";
import Destinaitions from "../componets/Destianitons/Destianitions";
import destinationimg1  from "../assets/5.jpg";
import destinationimg2  from "../assets/8.jpg";
import destinationimg3  from "../assets/1.jpg";
import destinationimg4  from "../assets/2.jpg";
import Cards from "../componets/Cards/Cards";



function Home() {
    return(
        <>
        <Hero 
        cName='Hero'
        heroImg={HeroImg}
        title="Your Journey Your Story"
        ptext="Choose your Facourute Destination"
        url="#"
        btnCalss="btnHero"
        btnText="Travel Now"
        />

        <Destinaitions 
        
        title="Popular Destinations"
        infoP="Tours dive you the opportunity to see alot, within a timw frame"
        cNameText="col-6"
        hText="Mt. Daguldul, Batangas"
        pText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptas atque aspernatur dolorem accusantium distinctio, iste veritatis quasi sed optio!"
        destImg1={destinationimg1}
        destImg2={destinationimg2}

        
        />
        <Destinaitions 
        cNameText="col-6 order-last"
        hText="Taal Volcano, Batangas"
        pText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptas atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptas atque as aspernatur dolorem accusantium distinctio, iste veritatis quasi sed optio!"
        destImg1={destinationimg3}
        destImg2={destinationimg4}
        />

        <Cards />


        </>
    )

    }
export default Home;