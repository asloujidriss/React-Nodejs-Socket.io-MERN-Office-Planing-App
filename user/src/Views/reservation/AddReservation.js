import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import reservationService from '../../services/reservationService';
import Datetime from 'react-datetime';

const AddReservation = () => {
    const userId= JSON.parse(localStorage.getItem('userId'));
    const navigate = useNavigate()
  
    

    const [data, setData] = useState({
        title:"",
        start:"",
        end:"",
        description:"",
        membre:userId
        
    })

    const onChangeHandler=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
               
                reservationService.create(data).then(res=>{
                    console.log("response=>>>>>>>>",res)
                    setData(res.data)
                 window.location=`/getmyreservation`
                }).catch(err=>{
                   console.log("err=>>>>>>>>>",err)
                })
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
        }
    
        const verify = () => {
          reservationService.verify()
              .then((res) => {
                console.log(res.data);
                if(res.data["persondetected"]!="Unknown") {
                  // add Pres
                  reservationService.create(data).then(res=>{
                    console.log("response=>>>>>>>>",res)
                    setData(res.data)
                 window.location=`/getmyreservation`
                })
               }
               
              })
              .catch((err) => {
                console.log(err);
              });
          };
          
  return (
    <div>
            <div style={{marginTop:"150px"}}>
   <h1>Demande de reservation</h1>
  
   <strong>
   <a onClick={verify}>Presence</a>
  </strong>
<form onSubmit={onSubmitHandler} >
  <label htmlFor="fname">title</label><br />
  <input type="text" id="title" name="title" onChange={onChangeHandler} /><br />
  <label htmlFor="lname">startdate</label><br />
  <input type="date" id="startdate" name="startdate" onChange={onChangeHandler}  /><br /><br />
  <label htmlFor="fname">enddate</label><br />
  <input type="date" id="enddate" name="enddate" onChange={onChangeHandler}  /><br />
  <label htmlFor="fname">description</label><br />
  <input type="text" id="description" name="description" onChange={onChangeHandler} /><br />
  <input type="hidden" id="description" name="membre"  onChange={onChangeHandler}/><br />
  <input type="submit" defaultValue="Submit" />
</form>






    </div>
  
    </div>
  )
}

export default AddReservation