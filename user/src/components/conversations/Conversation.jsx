import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'


import './conversation.css'


function Conversation({conversation, currentUser}) {

  const [user,setUser]= useState(null)

  const getUser =()=>{
    
    const friendId = conversation.members.find((m)=> m !== currentUser?._id)
  UserService.get(friendId).then(res=>{
      setUser(res.data.data)
      
  }).catch(err=>{
      console.log(err)
  })
}



  useEffect(() => {
    getUser()
  }, [])
  


  return (
    <div className='conversation' >
        <img className='conversationImg' src={"http://localhost:4001/getImage/"+user?.image} alt="" />
        <span className='conversationName'>{user?.firstname} {user?.lastname}</span>
    </div>
  )
}

export default Conversation