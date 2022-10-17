import axios from 'axios'
import React, { useEffect, useState } from 'react'
import conversationService from '../../services/conversationService'
import UserService from '../../services/UserService'
import './chatOnline.css'

function ChatOnline({onlineUsers,currentId,setCurrentChat,own}) {

const [members,setMembers] = useState([])
const [onlineFriends, setOnlineFriends] = useState([])

const userid = onlineUsers[1]?._id



const getmembers =()=>{
  UserService.getAll().then(res=>{
      setMembers(res.data.data)

  }).catch(err=>{
      console.log(err)
  })
}
useEffect(() => {
  getmembers()
 }, [currentId])

 useEffect(() => {
  setOnlineFriends(onlineUsers);
}, [members,onlineUsers]);

console.log("onlineFriends",onlineFriends)

const handleClick = async () => {
  try {
    const res =await conversationService.gettwo(currentId,userid)
    console.log("response====>>>",res)
    console.log(currentId,userid)
   
    setCurrentChat(res.data.data);
  } catch (err) {
    console.log(err);
  }
};





  return (
    <div className='chatOnligne'>

      {onlineFriends.map(o=>(
        <div className="chatOnlineFreind" onClick={(o)=>handleClick(o)}>
          <div className="chatOnlineImgContainer">
             <img className='chatOnlineImg' src={"http://localhost:4001/getImage/"+o?.xImg} alt="" />
            <div className="chatOnlineBadge"></div>
        </div>
      <span className="chatOnlineName">{o?.yfirstname} {o?.zlastname}</span>
        </div>
        ))}
    </div>
  )
}

export default ChatOnline