import './App.scss';
import Main from './components/Main/Main';
import Signup from './components/SignUp/SignUp';
import Clinician from './components/Clinician/Clinician';
import Nav from './components/Nav/Nav';
import Patients from './components/Patients/Patients';
import Notes from './components/Notes/Notes';
import Form from './components/Form/Form';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    setUser(null);
  };

  const handleLogin=(user)=>{
    setUser(user);
  }

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="App">
     <BrowserRouter>
     {
    (window.location.pathname === '/clinician' ||
      window.location.pathname === '/patients' ||
      window.location.pathname === '/notes') && (
        <Nav handleLogout={handleLogout} />
      )
  }
        <Routes>
          <Route path="/"element={<Main handleLogin={handleLogin} user={user} />}/>
          <Route path="/signup" element={<Signup handleLogin={handleLogin}/>} />
          <Route path="/clinician" element={ <Clinician handleLogout={handleLogout} user={user}/>}/>
          <Route path="/patients" element={<Patients user={user} show={show} setShow={setShow} handleClose={handleClose}/>}/>
          <Route path="/notes" element={<Notes user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
