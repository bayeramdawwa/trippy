


import './Footer.css'

function Footer() {

    return (
        <footer>
            <div className="container py-4">
                <div className="info d-flex justify-content-between aling-items-center py-1" >

                   <div className="logo">
                    <h1>Trippy</h1>
                    <p>Choose Your Favourite Destination</p>
                   </div>

                   <div className="medis">
                   <i  class="fa">&#xf230;</i>
                   <i  className='fa'>&#xf16d;</i>
                   <i  class='fa'>&#xf099;</i>
                  
                   </div>

                </div>

                <div className="links  ">
                    <div className=" row d-flex justify-content-between aling-items-center py-1">
                        <ul class="col-12 col-md-3">
                            <h3>Project</h3>
                            <li><a href="#">Changelog</a></li>
                            <li><a href="#">Status</a></li>
                            <li><a href="#">License</a></li>
                            <li><a href="#">All Version</a></li>
                        </ul>
                        <ul class="col-12 col-md-3">
                            <h3>Community</h3>
                            <li><a href="#">GitHup</a></li>
                            <li><a href="#">Issuse</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                        <ul class="col-12 col-md-3">
                            <h3>Help</h3>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Troubleshooting</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                        <ul class="col-12 col-md-3">
                            <h3>Others</h3>
                            <li><a href="#">Trems of service</a></li>
                            <li><a href="#">privacy Policy</a></li>
                            <li><a href="#">License</a></li>
        
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;