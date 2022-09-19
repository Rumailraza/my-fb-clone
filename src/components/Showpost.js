import React from 'react'
import { useState } from 'react';
import { FaRegThumbsUp, FaComment ,FaShare } from "react-icons/fa";

const Showpost = () => {
    const [state, setstate] = useState([
        {
            id:"1",
            name:"hamza dilshad",
            time:"21h",
            userimg:"/images/number1.jpg",
            text:"Text definition, the main body of matter in a manuscript, book, newspaper, etc., ",
            postimg:"/images/post1.jpg"
        },


        {
            id:"2",
            name:"Raheel Raza",
            time:"22h",
            userimg:"/images/number2.jpg",
            text:"Text definition, the main body of matter in a manuscript, book, newspaper, etc., ",
            postimg:"/images/post2.jpg"
        },

        {
            id:"3",
            name:"Ammer hamza",
            time:"28h",
            userimg:"/images/number3.jpg",
            text:"Text definition, the main body of matter in a manuscript, book, newspaper, etc., ",
            postimg:"/images/post3.jpg"
        },

        {
            id:"4",
            name:"hamza dilshad",
            time:"2h",
            userimg:"/images/number4.jpg",
            text:"Text definition, the main body of matter in a manuscript, book, newspaper, etc., ",
            postimg:"/images/post4.jpg"
        }
    ]);
  return (
    <div className='show'>
        {state.map(post =>(
            <div className='empty' key={post.id} >
            <div className='show__header'>
                 <div className='show__header-img'>
                     <img src={post.userimg} alt="posts img" />
                     </div>
                     <div className='show__header-name'> 
                      Sameer khan <div className='date'>{post.time}</div>
                     </div>
                  
            </div>
            <div className='show__body'>
                <div className='show__body-text'>
                  {post.text}
                </div>
                
                <div className='show__body-img'>
                    <img src={post.postimg} alt="body image" />
                </div>
            </div>
            <div className='show__reaction'>
                <span className='reaction'>
                   <FaRegThumbsUp /> <span className='reaction-text'>Live</span>
                    </span>
    
                   <span className='reaction'>
                   <FaComment /> <span className='reaction-text'>Comment</span>
                   </span>
    
                   <span className='reaction'>
                   <FaShare/> <span className='reaction-text'>Share</span>
                   </span>
                   </div>
                   </div>
        ))}
        </div>
    
  )
}

export default Showpost;