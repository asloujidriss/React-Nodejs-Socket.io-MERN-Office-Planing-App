import React from 'react'

const GetMyPresence = () => {
    const [presences, setPresences] = useState([]);

    const getAll = () => {
        PresenceService.getAll()
          .then((res) => {
            console.log(res);
            setPresences(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <div>
          <div style={{marginTop:"150px"}}>
             <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title"><strong>Liste des conges</strong></h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}><center>id</center></th>
                <th width={50}>membre</th>
                <th width={100}>date_pres</th>
                <th width={100}>Lundi</th>
                <th width={100}>Mardi</th>
                <th width={100}>Mercredi</th>
                <th width={100}>Jeudi</th>
                <th width={100}>Vendredi</th>
                <th width={100}>Samedi</th>
                <th width={50}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {presences?.map((item,index)=>{

                return (
                <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td>{item.membre?.firstname} {item.membre?.lastname}</td>
              
                <td>       
                          <td>{item.choix_pres[0]?.choix}</td>
                  </td>
                  <td>
                              
                              <td>{item.choix_pres[1]?.choix}</td>   
                              </td>
                              <td>
                              <td>{item.choix_pres[2]?.choix}</td>
                              </td>
                              <td>
                              <td>{item.choix_pres[3]?.choix}</td>
                              </td>
                              <td>
                              <td>{item.choix_pres[4]?.choix}</td>
                              </td>
                              <td>
                              <td>{item.choix_pres[5]?.choix}</td>
                              </td>
                <td>
                  
                  <Link to = {`/updateconge/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                  </Link>

                  <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
              )
              }
              )}
                                                   
            </tbody>
          </table>
        </div>                                
      </div>
    </div> 
    <Link to="/addconge" className='btn btn-primary'>Add conge</Link> 
  </div>
</div>
    </div>
    </div>
  )
}

export default GetMyPresence