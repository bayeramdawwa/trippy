


function Cardcompo(props) {

    return (
        < div className="mx-3">
            <div class="card w-100 " >
                <div className="imgcard"> 

                <img src={props.imgurl} class="card-img-top " alt="..."/>
                </div>
                    <div class="card-body">
                        <h2>{props.h2card} </h2>
                        <p class="card-text">{props.cardtext}</p>
                    </div>
            </div>
        </div>
    )

}

export default Cardcompo;