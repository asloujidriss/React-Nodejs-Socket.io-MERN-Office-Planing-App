import './messenger.css'
import React, { useEffect, useRef, useState } from 'react'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import conversationService from '../../services/conversationService'
import messageService from '../../services/messageService'
import {io} from "socket.io-client"
import UserService from '../../services/UserService'

function Messenger({own}) {
const user = JSON.parse(localStorage.getItem("user"))
const id = JSON.parse(localStorage.getItem("userId"))

const [conversations, setConversations] = useState([])
const [currentChat, setCurrentChat] = useState(null)
const [messages, setMessages] = useState([])
const [newMessage, setNewMessage] = useState("")
const [members, setMembers] = useState([])
const [arrivalMessage, setArrivalMessage] = useState(null)
const [onlineUsers, setOnlineUsers] = useState([])
const socket = useRef()
const scrollRef = useRef()


useEffect(() => {
socket.current = io(("ws://localhost:8900"))
socket.current.on("getMessage", (data)=>{
    setArrivalMessage({
        sender:data.senderId,
        text: data.text,
        createdAt:Date.now(),
    }) 
   
})
},[])

useEffect(() => {
arrivalMessage &&
 currentChat.members?.includes(arrivalMessage.sender) &&
setMessages((prev)=>[...prev, arrivalMessage])
},[arrivalMessage, currentChat])

const getAll =()=>{
    UserService.getAll().then(res=>{
      
        setMembers(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
}
useEffect(() => {
    getAll()
   }, [])


useEffect(() => {
socket.current.emit("addUser",user?._id, user.image, user.firstname, user.lastname)
socket.current.on("getUsers",(users)=>{
//  setOnlineUsers(members?.filter((m) => users.some((u) => u.userId === m._id)))
setOnlineUsers(users?.filter((u) => members.filter((m) => m._id === u.userId )))

console.log("onlineUsers!!!!!!!!!",onlineUsers)
})
},[setMembers])



const getconversation =()=>{
    conversationService.get(id).then(res=>{
  
setConversations(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
}

useEffect(() => {
    getconversation()
}, [])


const getMessages =()=>{
     messageService.get(currentChat?._id).then(res=>{
        setMessages(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
}

useEffect(() => {
    getMessages()
}, [currentChat])

const handleSubmit=(e)=>{
    e.preventDefault()

    const message ={
        sender:user._id,
        text : newMessage,
        conversationId: currentChat?._id
    }

    const receiverId= currentChat.members.find(member=> member !==user._id)
    
console.log(receiverId)

   socket.current.emit("sendMessage",{
       senderId:user._id,
       receiverId,
       text: newMessage
   })

    messageService.create(message).then(res=>{
        console.log(res)
        setMessages([...messages,res.data.data])
        setNewMessage("")

    }).catch(err=>{
        console.log(err)
    })

}


useEffect(() => {
  scrollRef.current?.scrollIntoView({behavior:"smooth"})
}, [messages])


  return (
    <div className='messenger'>
         <div className='chatMenu'>
             <div className="chatMenuWrapper">
                  <input placeholder="Search for friends" className="chatMenuInput" />
                  <div className="scroll">
                      {conversations.map((c)=>(
                          <div onClick={()=>setCurrentChat(c)}>
                           
                              <Conversation conversation={c}/>  
                          
                          </div>
                         
                         ))}
                 
                  </div>
             </div>
         </div>
         <div className='chatBox'>
             <div className="chatBoxWrapper">
             
                 {     
                     currentChat ?(
                        <>
                <div className="chatBoxTop">
                    {messages.map((m)=>(
                        <div ref={scrollRef} >
                        <Message message={m} own={m.sender===user?._id} receiver={m.sender!==user?._id}  onlineUsers={onlineUsers} />
                        </div>
                    ))}

                </div>
                <div className="chatBoxBottom">
                    <textarea className="chatMessageInput" placeholder="write something..." 
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    ></textarea>
                    <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                </div> 
                </>
                 ): (
                 <span className="noConversationText">Say hello to your friends</span>
                 )}
               
             </div>
         </div>
         <div className='chatOnline'>
             <div className="chatOnlineWrapper">
                <ChatOnline  onlineUsers={onlineUsers} currentId={user?._id} setCurrentChat={setCurrentChat} />
                
             </div>
         </div>
    </div>
  )
}

export default Messenger