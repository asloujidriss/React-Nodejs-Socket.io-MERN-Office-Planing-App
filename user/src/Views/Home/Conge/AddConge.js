import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import CongeService from '../../../services/CongeService'
import './AddConge.css'
const AddConge = () => {
    const navigate = useNavigate()
  
    const userId= JSON.parse(localStorage.getItem('userId'));

    const [data, setData] = useState({
        duree:"",
        date_debut:"",
        date_fin:"",
        raison:"",
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
               
                CongeService.create(data).then(res=>{
                    console.log("response=>>>>>>>>",res)
                    setData(res.data)
                    window.location=`/getmyconge`
                }).catch(err=>{
                   console.log("err=>>>>>>>>>",err)
                })
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
        }
  return (
    <div style={{marginTop:"150px"}}>
   <h1>Demande de conge</h1>
<form onSubmit={onSubmitHandler} >
  <label htmlFor="fname">Duree</label><br />
  <input type="text" id="duree" name="duree" onChange={onChangeHandler} /><br />
  <label htmlFor="lname">Date debut</label><br />
  <input type="date" id="date_debut" name="date_debut" onChange={onChangeHandler}  /><br /><br />
  <label htmlFor="fname">Date fin</label><br />
  <input type="date" id="date_fin" name="date_fin" onChange={onChangeHandler}  /><br />
  <label htmlFor="fname">raison</label><br />
  <input type="text" id="raison" name="raison" onChange={onChangeHandler} /><br />
  <input type="hidden" id="raison" name="membre"  onChange={onChangeHandler}/><br />
  <input type="submit" defaultValue="Submit" />
</form>






    </div>
  )
}

export default AddConge