import React from 'react'
import { useState } from 'react';

const Sidebar = () => {
    const [state, setstate] = useState([

     {id:1, image:'/images/number1.jpg',name:'saina rehman'},
     {id:2, image:'/images/number2.jpg',name:'hamza Dilshad'},
     {id:3, image:'/images/number3.jpg',name:'Muhammad fazain'},
     {id:4, image:'/images/number4.jpg',name:'saina rehman'},
     {id:5, image:'/images/number5.jpg',name:'saina rehman'},
     {id:6, image:'/images/number6.jpg',name:'Ahmed Raza Attari'},
     {id:7, image:'/images/number7.jpg',name:'Nimra Fasil'},
     {id:8, image:'/images/number8.jpeg',name:'Rumail Raza'},
     {id:9, image:'/images/number9.jpg',name:'Muhammad Suban Attari'},






    ]);
  return (
         <div className='sidebar'>
            {state.map((info)=>(
                       <div className='sidebar__list' key={info.id}>
                       <div className='sidebar__list-img'>
                           <img src={info.image} alt="group image" />
                           
                       </div>    
                       <div className='sidebar__list-name'>{info.name}</div>
                       </div>
                       

            ))}
 </div>
  )
}

export default Sidebar