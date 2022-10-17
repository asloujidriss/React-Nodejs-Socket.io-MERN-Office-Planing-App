import React from 'react'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DocumentService from '../../../services/DocumentService'
const GetAllDocuments = () => {
    const [documents,setDocuments]=useState()
    const getAlldocu = ()=>{
        DocumentService.getAlldocu().then(res=>{
            console.log(res)
            setDocuments(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getAlldocu()
    
    },[])
    const onDelete = (id)=>{
        DocumentService.remove(id)
        .then(res=>{
            getAlldocu()
        })
            }
  return (
    <div>
       <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">

                                <div class="panel-heading">
                                    <h3 class="panel-title">List Of Documents</h3>
                                </div>

                                <div class="panel-body panel-body-table">

                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">id</th>
                                                    <th width="100">titre</th>
                                                    <th width="100">type</th>
                                                    <th width="100">description</th>
                            
                                                    <th width="100">fichier</th>
                                                    <th width="100">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                            
                                               {documents?.map((item,index)=>{
                                                   return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td><strong>{item.titre}</strong></td>
                                                    <td>{item.type}</td>
                                                    <td>{item.description}</td>
                                                   
                                                    <td>{item.Galleries[0] && (
                                                        <img style={{height:"100px"}} src={"http://localhost:4000/getImage/"+ item.Galleries[0].name} />
                                                    )}

                                                    </td>
                                                    <td>
                                                        <Link to={`/updatedoc/${item._id}`}>
                                                       { <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>}
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)}><span class="fa fa-times"></span></button>
                                                    </td>
                                                </tr>
                                                   )
                                               })}
                                               <Link to="/adddocument" className='btn btn-primary'>
                                                   AddDocument
                                               </Link>
                                              

                                            </tbody>
                                        </table>
                                    </div>                                

                                </div>
                            </div>                                                

                        </div>
                    </div>
    </div>
  )
}

export default GetAllDocuments