import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import Datetime from 'react-datetime';
const AddPre = ({isOpen,onClose,onEventAdded}) => {
    const [modalOpen,setModelOpen]=useState(false)
    // const [event, setEvents] = useState({})
    const[title,setTitle]=useState("")
    const[start,setStart]=useState(new Date())
    const[end,setEnd]=useState(new Date())
    const onSubmit=(event)=>{
        event.preventDefault();
        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }

  return (
    <div>
<form onSubmit={onSubmit}>
    
    <input placeholder="Title"  value={title} onChange={e=>setTitle(e.target.value)}/>
    <div>
        <label>Start date</label>
    <Datetime value={start} onChange={date=>setStart(date)}/>
    </div>
    <div>
        <label>End date</label>
    <Datetime  value={end} onChange={date=>setEnd(date)}/>
    </div>
    <button>Add Event</button>
    
            </form>
    {/* <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
    
    <input placeholder="Title"  value={title} onChange={e=>setTitle(e.target.value)}/>
    <div>
        <label>Start date</label>
    <Datetime value={start} onChange={date=>setStart(date)}/>
    </div>
    <div>
        <label>End date</label>
    <Datetime  value={end} onChange={date=>setEnd(date)}/>
    </div>
    <button>Add Event</button>
            </form>
    
        </Modal> */}
        
        </div>
  )
}

export default AddPre
