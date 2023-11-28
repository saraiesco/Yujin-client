import './App.scss';
import Main from './components/Main/Main';
import Signup from './components/SignUp/SignUp';
import Clinician from './components/Clinician/Clinician';
import Nav from './components/Nav/Nav';
import Patients from './components/Patients/Patients';
import Notes from './components/Notes/Notes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  const handleLogin=(user)=>{
    setUser(user);
    console.log(user)
  }

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/clinician" element={ <Clinician handleLogout={handleLogout} user={user}/>}/>
          <Route path="/patients" element={<Patients user={user} />}/>
          <Route path="/notes" element={<Notes user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
