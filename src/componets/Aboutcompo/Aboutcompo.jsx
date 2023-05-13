
import './Aboutt.css'

function Aboutcompo(props) {

    return (
       <div>
        <h1 className="ha">{props.Habout}</h1>
        <p className="pa">{props.Pabout}</p>
       </div>
    )
}

export default Aboutcompo;