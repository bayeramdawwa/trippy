


import './Destinations.css'


function Destinaitions(props) {

    return(
         <section className="Destinations mt-3">
        <div className="container">
            <h1>{props.title}</h1>
            <p className='mb-2'>{props.infoP}</p>
            <div className="row mt-5">
                <div className= {props.cNameText}>
                    <div >
                        <h1>{props.hText}</h1>
                         <p>{props.pText}</p>
                    </div>
                </div>
                <div className="col-6 ">
                    <div className="row">
                    <div className="col-6 desimg mt-4">
                        <img src={props.destImg1} alt="" />
                    </div>
                    <div className="col-6 desimg">
                        <img src={props.destImg2} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
        </section>
    )
    
}

export default Destinaitions;