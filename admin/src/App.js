import 'antd/dist/antd.css'; 
import './App.css';
import jwt_decode from "jwt-decode";

import Home from './Views/Home/home';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import Layout from "./Views/Home/Layout/layout"
import Login from './Views/Login/Login';
import Register from './Views/Home/Myusers/RH/Register'
import Registerma from './Views/Home/Myusers/Manager/Registerma'
import GetAllMembres from './Views/Home/Membre/GetAllMembres';
import GetAllDocuments from './Views/Home/Documents/GetAllDocuments';
import GetAllUsers from './Views/Home/Myusers/RH/GetAllUsers';
import AddUser from './Views/Home/Myusers/RH/AddUser';
import UpdateUser from './Views/Home/Myusers/RH/UpdateUser';
import GetAllBureau from './Views/Home/bureau/GetAllBureau';
import GetAllUsersma from './Views/Home/Myusers/Manager/GetAllUsersma';
import GetAllEquipe from './Views/Home/equipe/GetAllEquipe';
import AddDocument from './Views/Home/Documents/AddDocument';
import UpdateDocument from './Views/Home/Documents/UpdateDocument';
import AddEquipe from './Views/Home/equipe/AddEquipe';
import UpdateEquipe from './Views/Home/equipe/UpdateEquipe';
import GetAllTaches from './Views/taches/GetAllTaches';
import AddTache from './Views/taches/AddTache';
import UpdateTache from './Views/taches/UpdateTache';
import GetAllConge from './Views/Home/Conge/GetAllConge';
import AddConge from './Views/Home/Conge/AddConge';
import UpdateConge from './Views/Home/Conge/UpdateConge';
import GetAllProjet from './Views/Home/projet/GetAllProjet';
import AddProjet from './Views/Home/projet/AddProjet';
import UpdateProjet from './Views/Home/projet/UpdateProjet';
import Logout from './Views/Logout/Logout';
import DetailConge from './Views/Home/Conge/DetailConge';
import AddMembre from './Views/Home/Membre/AddMembre'
import GettAllBureau from './Views/Home/bureau/GetAllBureau';
import addBureau from './Views/Home/bureau/AddBureau';
import AddBureau from './Views/Home/bureau/AddBureau';
import GetMyTache from './Views/taches/GetMyTache';
import AddPresence from './Views/Home/Presence/AddPresence';
import GetAllPresence from './Views/Home/Presence/GetAllPresence';
import GetALLReservation from './Views/Home/Reservation/GetALLReservation';
import UpdateReservation from './Views/Home/Reservation/UpdateReservation';
import UpdateReser from './Views/Home/Reservation/UpdateReser';
import AddSondage from './Views/Home/sondage/AddSondage';
import GetAllSondage from './Views/Home/sondage/GetAllSondage';
import AddPlanification from './Views/Home/plannification/AddPlanification';
import GetPlannification from './Views/Home/plannification/GetPlannification';
import GetPres from './Views/Home/Pre/GetPres';
import GetMy from './Views/Home/Myusers/RH/GetMy';
import UpdateUserma from './Views/Home/Myusers/Manager/UpdateUserma';




function App() {
  // const PrivateRoute = ({auth:{isAthenticated},children})=>{
  //   return isAthenticated ? children : <Navigate to="/login"/>



  const isRH = JSON.parse(localStorage.getItem("isRH"))

  const isManager = JSON.parse(localStorage.getItem("ismanager"))

    const user = JSON.parse(localStorage.getItem("user"))

   const PrivateRoute = ({children})=>{
      return user ? children : <Navigate to="/login"/>

  }
  const PrivateRoute1 = ({children})=>{
    return isRH ===  true   ? children : <Navigate to="/login"/>

  }

  const PrivateRoute2 = ({children})=>{
   return isManager===true ? children : <Navigate to="/"/>

 }

const PrivateRoute3 = ({children})=>{
  return isRH==="true" || isManager==="true" ? children : <Navigate to="/"/>

}

  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}>
      {/* <Route path="/" element={<PrivateRoute auth={{ isAuthenticated: true }}><Home/></PrivateRoute>}> */}
        {/* <Route path="/" element= {<Home />} > */}
          <Route index path="/" element={<Layout />} />
          <Route path ="/addMembre" element={<AddMembre />} />
          <Route path ="/getmembres" element={<GetAllMembres />} />
          <Route path ="/getdocuments" element={<GetAllDocuments/>} />
          <Route path ="/updatedoc/:id" element={<UpdateDocument/>} />
          <Route path ="/updatetache/:id" element={<UpdateTache/>} />
          <Route path ="/gettache" element={<GetAllTaches/>} />
          <Route path ="/addtache" element={<PrivateRoute2><AddTache/></PrivateRoute2> } />
          <Route path ="/updateequpe/:id" element={<UpdateEquipe/>} />
          <Route path ="/addequipe" element={<AddEquipe/>} />
          <Route path ="/getequipe" element={<GetAllEquipe/>} />
          <Route path ="/getbureau" element={<GetAllBureau/>} />
          <Route path ="/adddocument" element={<AddDocument/>} />
          <Route path ="/getusers" element={<GetAllUsers/>} />
          <Route path ="/getusersma" element={<GetAllUsersma/>} />
          <Route path ="/adduser" element={<AddUser/>} />
          <Route path ="/updateuser/:id" element={<UpdateUser/>} />
          <Route path ="/getbureau" element={<GetAllBureau/>} />
          <Route path ="/addbureau" element={<AddBureau />} />
          <Route path ="/getconge" element={<PrivateRoute3><GetAllConge/></PrivateRoute3>} />
          <Route path ="/getprojet" element={<GetAllProjet/>} />
          <Route path ="/addprojet" element={<AddProjet/>} />
          <Route path ="/updateprojet/:id" element={<UpdateProjet/>} />
          <Route path ="/addconge" element={<AddConge/>} />
          <Route path ="/detailconge/:id" element={<DetailConge/>} />
          <Route path ="/updateconge/:id" element={<UpdateConge/>} />
          <Route path ="/getmytache" element={<GetMyTache/>} />
          <Route path ="/addpresence" element={<AddPresence/>} />
          <Route path ="/getpresence" element={<GetAllPresence/>} />
          <Route path ="/getreservation" element={<GetALLReservation/>} />
          <Route path ="/update" element={<UpdateReservation/>} />
          <Route path ="/updatereser/:id" element={<UpdateReser/>} />
          <Route path ="/addsondage" element={<AddSondage/>} />
          <Route path ="/getsondage" element={<GetAllSondage/>} />
          <Route path ="/addplanification" element={<AddPlanification/>} />
          <Route path ="/getplanification" element={<GetPlannification/>} />
          <Route path ="/getpre" element={<GetPres/>} />
          <Route path ="/getmy" element={<GetMy/>} />
          <Route path ="/updatema/:id" element={<UpdateUserma/>} />
          </Route>
        
         
        <Route path="/login" element={<Login/>} />
        <Route path="/registerrh" element={<Register/>} />
        <Route path="/registerma" element={<Registerma/>} />

          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
