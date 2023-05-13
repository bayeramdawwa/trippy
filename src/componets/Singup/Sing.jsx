


import { Link } from 'react-router-dom';
import './Sing.css'


function Sing() {

    return(
     <div className=" Sing px-2 px-lg-5">
        <div className="container py-3  ">
            <form action="#" className='row  d-flex flex-column justify-content-center align-items-center'>
                <h3>Creat Account</h3>
                <input type="text" placeholder='Your Name' className='col-6 my-2' />
                <input type="email" placeholder='your Email'className='col-6 my-2' />
                <input type="password" placeholder='Password'className='col-6 my-2' />
                <input type="password" placeholder='Repeat your Password'className='col-6 my-2' />
                <input type="submit" value="Register" className='col-6 my-2' />
                <p>Have already an account! <Link>log here</Link> </p>
            </form>
        </div>
     </div>
    )
    
}

export default Sing;