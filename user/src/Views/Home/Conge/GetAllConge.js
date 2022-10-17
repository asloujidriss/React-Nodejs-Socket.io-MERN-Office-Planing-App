// import React, { useEffect, useState } from 'react'
// import CongeService from '../../../services/CongeService'
// import './GetAllConge.css'
// const GetAllConge = () => {
   
//     const [conges,setConges]=useState()
//     const getAll = ()=>{
//         CongeService.getAll().then(res=>{
//             console.log(res)
//             setConges(res.data.data)
//         }).catch(err=>{
//             console.log(err)
//         })
//     }
//     useEffect(()=>{
//         getAll()
    
//     },[])
//   return (
//     <div style={{marginTop:"150px"}}>
//         <h1>Liste</h1>
        
//         {/* <table>
//   <tr>
//     <td>Nom</td>
//     <td>Prénom</td>
//     <td>Age</td>
//     <td>Mail</td>
//   </tr>
//   <tr>
//     <td>Giraud</td>
//     <td>Pierre</td>
//     <td>28</td>
//     <td>pierre.giraud@edhec.com</td>
//   </tr>
//   <tr>
//     <td>Joly</td>
//     <td>Pauline</td>
//     <td>27</td>
//     <td>pjl@gmail.com</td>
//   </tr>
// </table> */}
// <table border="1" cellpadding="10" cellspacing="1" width="100%">
//    <tr>
//       <th width="20%">id</th>
//       <th width="20%">duree</th>
//       <th width="60%">date_debut</th>
//       <th width="60%">date_fin</th>
//       <th width="60%">raison</th>
//    </tr>
//    {conges?.map((item,index)=>{

// return (
//    <tr> 
               
//       <td>{index}</td>
//       <td>{item.duree}</td>
//       <td>{item.date_debut}</td>
//       <td>{item.date_fin}</td>
//       <td>{item.raison}</td>
//       <td>{item.status==="accepter" ? "accepted" 
//       : item.status=== "refuser" ? "refused"  
//       : "en attente"}</td>
//    </tr>
//    )
// }
// )}
// </table>
//     </div>
//   )
// }

// export default GetAllConge