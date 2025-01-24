import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from '../assets/logo.png'
function Footer() {
  return (
    <>
    <div style={{backgroundColor:"#000000"}}>
        <div className="container">
            <div className="row p-5">
                <div className='text-center'>
                <img src={logo} height='90' alt="" />
                </div>
                <div className="col-12 col-md-4 text-center mb-3">
                        <div style={{border:'2px solid white',borderRadius:'15px'}} className='p-3'>
    <h5 style={{color:'#0796EF'}}>CONNECT WITH US</h5>
    <h5><BsTelephone /> +91 9567843340</h5>
    <h5><MdEmail /> info@deepnetsoft.com</h5>
                        </div>
                </div>
                <div className="col-12 col-md-4 text-center mb-3">
                <div style={{border:'2px solid white',borderRadius:'15px',height:"158px"}} className='p-3'>
    <h2 style={{color:'#0796EF'}} className=''>DEEP <span className='text-light' style={{fontSize:"40px"}}> NET </span>SOFT</h2>
    <h6 ><FaTwitter className='mx-2'/><FaFacebookF className='mx-2'/><FaInstagram className='mx-2'/><FaYoutube className='mx-2'/></h6>
                        </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                <div style={{border:'2px solid white',borderRadius:'15px'}} className='p-3'>
    <h5 style={{color:'#0796EF'}}>FIND US</h5>
    <h5><FaLocationDot /> First Floor,Geo infopark,</h5>
    <h5> InfoPark EXPY,kakkanad</h5>
                        </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-12 p-3" style={{backgroundColor:"#121618"}}>
                <div className='d-flex justify-content-between'>
                    <h5>© 2024 Deepnetsoft Solutions. All rights reserved.</h5>
                    <h5>Terms & Conditions &nbsp;&nbsp;&nbsp;Privacy Policy</h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer