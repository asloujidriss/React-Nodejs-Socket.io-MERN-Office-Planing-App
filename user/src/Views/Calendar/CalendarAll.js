import React, { useEffect, useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { AddEventModal } from './AddEventModal'
import moment from 'moment'
import axios from 'axios'
import calendarService from '../../services/calendarService'
const CalendarAll = () => {

    const [modalOpen, setModalOpen]=useState(false);
    const [events,setEvents]=useState([])
    const calendarRef = useRef(null);
    const onEventAdded = (event)=>{
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            start:moment(event.start).toDate(),
            end:moment(event.end).toDate(),
            title:event.title,
        });
    };
    
    // const getAll = ()=>{
    //     calendarService.getAll().then(res=>{
    //         console.log(res)
    //         setEvents(res.data.data)
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }
    // useEffect(()=>{
    //     getAll()
    
    // },[])
   
    async function handleEventAdd(data){
       console.log(data.event);
        calendarService.create(data).then(res=>{
            console.log("response=>>>>>>>>",res)
            setEvents(res.data)
    //await axios.post('/calendar/create-even/create-event',data.event);
        })
    }
    async function handleDatesSet(data){
   // const getAll = ()=>{
        calendarService.getAll().then(res=>{
            console.log(res)
            setEvents(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    
}
    useEffect(()=>{
        handleDatesSet()
    
    },[])
    // async function handleDatesSet(data){
       
    //     const response =await axios.get("/calendar/get-events")
    //         setEvents(response.data);
        
    //     }

  return (
      
    <div style={{marginTop:"150px"}}> 
        <section>
        <button style={{marginTop:"150"}} onClick={() => setModalOpen(true)}>Add Event</button>
        <div style={{position:"relative",zIndex:0}}>
        <FullCalendar
     ref={calendarRef}
      events={events}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        eventAdd={(event)=>handleEventAdd(event)}
       
        datesSet={(date)=>handleDatesSet(date)}
        />
        </div>
        <AddEventModal 
      isOpen={modalOpen} 
      onClose={()=>setModalOpen(false)} 
      onEventAdded={event=>onEventAdded(event)}/>
         
        </section>
    </div>
  )
}

export default CalendarAll