import React from 'react'
import { useState } from 'react';

const Chatbar = () => {
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
    {id:10, image:'/images/post1.jpg',name:'Kami qurban'},
    {id:11, image:'/images/post2.jpg',name:'Hassan Raza' },
    {id:12, image:'/images/post3.jpg',name:'auranzaib Raza' },
    {id:13, image:'/images/post4.jpg',name:'Ahmed Raza' },
    



 ]);
  return (
    <div className='chatbar'>
   {state.map(chat =>(
          <div className='chatbar__list' key={chat.id}>
          <div className='chatbar__list-img'>
            <img src={chat.image} alt="user picture" />
            <span className='status'></span>
          </div>
          <div className='chatbar__list-name'>
          {chat.name}
        </div>
        </div>
  
   ))}
        
    </div>
  )
}

export default Chatbar