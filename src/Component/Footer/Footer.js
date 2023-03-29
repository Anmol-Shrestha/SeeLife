import React from 'react'
import { Link } from 'react-router-dom'
import FooterData from '../Asset/Footerdata/FooterData';
import {
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

import {
  FaLocationArrow,
} from "react-icons/fa";


export default function Footer() {
  return (
    <>
    
    <footer>
        <div className="container">
            <div className="row">
                <div  className="col-lg-3 col-md-6 col-sm-6">
                  <div>
                    <h2>
                        Our Mission
                    </h2>
                      
                  </div>
                      
                      <p>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living. </p>
                      <p>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved </p>
                </div>
                
                <div  className="col-lg-2 col-md-2 col-sm-6 offset-lg-1">
                
                <div><h5>Quick Link</h5></div>
                
                <ul>
                        

                        <li>
                          <Link to="/">HOME</Link>
                        </li>
                        <li>
                          <Link to="/Aboutus">ABOUT</Link>
                        </li>
                        <li>
                          <Link to="/Causes">CAUSES</Link>
                        </li>
                </ul>
                </div>






                <div  className="col-lg-2 col-md-6 col-sm-6 gallery">


<div>
  <h5>Gallery</h5>

{FooterData.map(({image}, i)=>(
  
    <img key={i} className='mb-2 mx-1' src={image} alt="" />
 
))}

</div>



                </div>

                <div  className="col-lg-3 col-md-6 col-sm-6 offset-lg-1">
                
                   <div>
                    <h5>Contact Us</h5>
                   </div>

                    <p> <FaLocationArrow style={{color:"green"}}/> Head Office
                    
                    <br />
                    123, Main Street, Your City
                    
                    </p>

                    <p><AiOutlinePhone style={{color:"green"}}/> Phone Number
                    <br />
                    +123 256 7980 
                    <br />
                    +123 256 7980
                    </p>

                    <p><AiOutlineMail style={{color:"green"}}/> Email  <br />
                    
                    free@infoexample.com <br />
                    www.infoexample.com
                     </p>
                </div>
            </div>

           


        </div>
        <div className="row2">
              <div className="container text-center pt-3">
                <p>Copyright ©2023 All rights reserved | This template is made with by <span><Link to="https://colorlib.com/">ColorLib</Link></span></p>
              </div>
            </div>
    </footer>
    
    </>
  )
}
