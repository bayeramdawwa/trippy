import Cardcompo from "./Cardcompo";
import cardimg from "../../assets/5.jpg"
import './Cards.css'

import cardimg2 from "../../assets/6.jpg"
import cardimg3 from "../../assets/8.jpg"


function Cards() {

    return(
        <>
       .
       <section className="tripcards mt-5">
        <div className="container d-flex flex-column justify-content-center text-align">
        <h1>Recent Trips</h1>
        <p className='mb-2'>You Can Discover uniqe destinations using google maps</p>
        <div className=" row mt-4  d-flex  flex-wrap justify-content-around  p-0 ">
          
            <div className="col-sm-12 col-md-4 p-3">
            <Cardcompo
            imgurl={cardimg}
            h2card="Trip in indonesia"
            cardtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ex ipsam. Autem architecto corporis fuga minima, quia cum itaque quis."
            
            />
           
        </div>
        <div className="col-sm-12 col-md-4 p-3">
            <Cardcompo
            imgurl={cardimg2}
            h2card="Trip in Malaysia"
            cardtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ex ipsam. Autem architecto corporis fuga minima, quia cum itaque quis."
            
            />
           
        </div>
        <div className="col-sm-12 col-md-4 p-3">
            <Cardcompo
            imgurl={cardimg3}
            h2card="Trip in France"
            cardtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ex ipsam. Autem architecto corporis fuga minima, quia cum itaque quis."
            
            />
           
        </div>
        </div>
        </div>
       
       </section>
        </>
    )
    
}

export default Cards;