import React from 'react'
import {  FaRegFileImage, FaVideo,FaRegSmile } from "react-icons/fa";

const Create = () => {
  return (
    <div className='create'>
        <div className='create__first'>
            <div className='create__first-img'>
                <span><img src="/images/number8.jpeg" alt="user image" /></span>
            </div>
            <div className='create__first-input'>
                <input type="text" className='create__first-inputs' placeholder='Rumail Raza What is your mind ?' />
            </div>
        </div>
            <div className='create__second'>
           <span className='create__second-icon'><FaVideo className='redcolor' />
           <span className='text'>Live Video</span>
           </span>


           <span className='create__second-icon'><FaRegFileImage  className='greencolor'/>
           <span className='text'>Photos Video</span>
           </span>



           <span className='create__second-icon'><FaRegSmile className='orangecolor' />
           <span className='text'>Feelings</span>
           </span>
        </div>
    </div>
  )
}

export default Create