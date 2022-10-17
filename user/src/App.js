import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';

import Calendar from './Views/Calendar/CalendarAll';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import Layout from './Views/Home/Layout/Layout';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import GetAllConge from './Views/Home/Conge/GetAllConge';
import AddConge from './Views/Home/Conge/AddConge';
import Register from './Views/Myusers/Register';
import GetAllUser from './Views/Myusers/GetAllUser';
import GetMyConge from './Views/Home/Conge/GetMyConge'
import { GetAllTache } from './Views/Tache/GetAllTache';
import GetAllC from './Views/Calendar/GetAllC';
import AddReservation from './Views/reservation/AddReservation';
import { GetMyreservation } from './Views/reservation/GetMyreservation';
import GetAllEquipe from './Views/Home/Equipe/GetAllEquipe';
import Calen from './Views/Home/Calen/Calen';
import GetALLPlanification from './Views/Home/Plannification/GetALLPlanification';
import CalendarAll from './Views/Calendar/CalendarAll';
import AddPresence from './Views/Home/Presence/AddPresence';
import Messenger from "./Views/messenger/Messenger";




Modal.setAppElement('#root');
function App() {
  const user = JSON.parse(localStorage.getItem("user"))


  const PrivateRoute = ({children})=>{
    return user ? children : <Navigate to="/Login"/>
  }


  
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}>
        {/* <Route path="/" element= {<Home />} > */}
          <Route index path="/" element={<Layout />} />
          <Route path ="/getconge" element={<GetAllConge/>} />
          <Route path ="/getuser" element={<GetAllUser/>} />
          <Route path ="/addconge" element={<AddConge/>} />
          <Route path ="/getmyconge" element={<GetMyConge/>} />
          <Route path ="/gettache" element={<GetAllTache/>} />
          <Route path ="/addcalenrier" element={<CalendarAll/>}/>
          <Route path ="/getcalendar" element={<GetAllC/>} />
          <Route path ="/addcalen" element={<Calen/>} />
          <Route path ="/addreservation" element={<AddReservation/>} />
          <Route path ="/getmyreservation" element={<GetMyreservation/>} />
          <Route path ="/getallequipe" element={<GetAllEquipe/>} />
          <Route path ="/getplanification" element={<GetALLPlanification/>} />
          <Route path ="/addpresence" element={<AddPresence/>} />
          <Route path="/messenger" element={<Messenger />} />
          
    </Route>
        
         
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />

          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
