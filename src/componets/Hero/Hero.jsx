

import './Hero.css'

function Hero(props) {

    return(
        <>
        <div className={props.cName}>
            <img src={props.heroImg} alt="heroIMG"/>
             <div className="heroText">
                <h1>{props.title}</h1>
                <p>{props.ptext}</p>
                <a href={props.url} className = {props.btnCalss}>{props.btnText}</a>
             </div>
            
            
              </div>
        </>
    )
    
}

export default Hero;