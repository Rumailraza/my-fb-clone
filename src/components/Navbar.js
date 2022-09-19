import React from 'react'
import { FaFacebook,FaHome,FaSistrix, FaFontAwesomeFlag, FaUsers, FaGamepad, FaVideo, FaFacebookMessenger,FaBell, FaSortDown,FaPlus } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='navbar__first'>
            <div className='navbar__first-logo'>
                <FaFacebook className='navbar__logo' />
            </div>
            <div className='navbar__first-search'>
            
                <input className='navbar__first-searchbar' placeholder='Search Facebook' />
                <FaSistrix  className='navbar__search-icon'/>
            </div>
        </div>
        <div className='navbar__middle'>
            <span className='middle-icon'>
                <FaHome   className='navbar__middle-icon'/>
            </span>

            <span className='middle-icon'>
                <FaFontAwesomeFlag  className='navbar__middle-icon'/>
                <span className='navbar-notify'>3</span>
            </span>

            <span className='middle-icon'>
                <FaVideo  className='navbar__middle-icon'/>
                <span className='navbar-notify'>12</span>
            </span>

            <span className='middle-icon'>
                <FaUsers className='navbar__middle-icon' />
                <span className='navbar-notify'>32</span>
            </span>

            <span className='middle-icon'>
                <FaGamepad className='navbar__middle-icon'/>
                <span className='navbar-notify'>7</span>
            </span>
        </div>
                
         <div className='navbar__last'>
         <span className='navbar__last-icon'>
         <FaPlus />    
        </span>    


        <span className='navbar__last-icon'>
        <FaFacebookMessenger />    
        </span>



        <span className='navbar__last-icon'>
        <FaBell />    
        </span>


      
        <span className='navbar__last-icon'>
         <FaSortDown />    
        </span>

        </div>  
       
    </div>
  )
}

export default Navbar