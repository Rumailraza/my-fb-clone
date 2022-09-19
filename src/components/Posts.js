import React from 'react'
import Stories from './Stories'
import Create from './Create'
import Showpost from './Showpost'
import Chatbar from './Chatbar'
const Posts = () => {
  return (
    <div className='posts'>
    <Stories />
    <Create />
    <Showpost />
    <Chatbar />
    </div>
  )
}

export default Posts