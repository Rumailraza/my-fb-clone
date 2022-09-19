import React from 'react'
import { useState } from 'react';
const Stories = () => {
    const  [state, setstate] = useState([
        {id:1, image:'/images/number1.jpg',name:'saina rehman'},
        {id:2, image:'/images/number2.jpg',name:'hamza Dilshad'},
        {id:3, image:'/images/number3.jpg',name:'Muhammad fazain'},
        {id:4, image:'/images/number4.jpg',name:'saina rehman'},

    ]);
  return (
    <div className='Stories'>
    {state.map(story =>(
                <div className='Stories__col' key={story.id}>
                <div className='Stories__body'>
                    <img src={story.image} alt="stories" />
                    <div className='Stories__body-overlay'>
                        <div className='Stories__body-overlay-img'>
                            <img src={story.image} alt="stories pictures" />
                        </div>
                      <div className='Stories__body-name'>
                      {story.name}
                      </div>
                    </div>
            </div>
             </div>
    ))}






     

    </div>
  )
}

export default Stories