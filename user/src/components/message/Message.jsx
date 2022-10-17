import "./message.css";
import { useEffect, useState } from "react";
import messageService from "../../services/messageService";


import {format} from 'timeago.js'

export default function Message({ message, own, onlineUsers,receiver}) {
  const [user,setUser]= useState(null)
  
  // const userr = JSON.parse(localStorage.getItem("user"))

  

  
  const [messages,setMessages] = useState([])
  const user0 = onlineUsers[0]
  const user1 = onlineUsers[1]


const conversationId= message?.conversationId

const Img = JSON.parse(localStorage.getItem("img"))


 const getmessage=()=>{
   messageService.get(conversationId).then(res=>{
    //  console.log("response====>>>>",res)
     setMessages(res.data.data)
   }).catch(err=>{
     console.log(err)
   })
 }


useEffect(() => {
  getmessage()
}, [])






  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        
            {
              own ? <img className="messageImg" src={ "http://localhost:4001/getImage/"+user0?.Img } alt=""/> :
              user1 ?
              <img className="messageImg" src={ "http://localhost:4001/getImage/"+user1.Img } alt=""/>
              : "_"
            }
            

        
        <p className="messageText">{message?.text}</p>
      </div>
        <div className={own ? "message own Bottom" : "messageBottom"}>{format(message?.createdAt)}</div>
    </div>
  );
}