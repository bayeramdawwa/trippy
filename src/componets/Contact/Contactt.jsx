


import './Contactt.css'


function Contactt() {

    return(
     <div className=" contact px-2 px-lg-5">
        <div className="container py-3  ">
            <form action="#" className='row d-flex flex-column justify-content-center align-items-center  '>
                <h3>Send massage to US</h3>
                <input type="text" placeholder='Name' className='col-6  my-2' />
                <input type="email" placeholder='Email'className='col-6 my-2' />
                <input type="text" placeholder='Subject'className='col-6 my-2' />
                <textarea name="" className='col-6 my-2' id="" cols="30" rows="4" placeholder='Massage'></textarea>
                <input type="submit" value="Send massage" className='col-6 my-2' />
            </form>
        </div>
     </div>
    )
    
}

export default Contactt;