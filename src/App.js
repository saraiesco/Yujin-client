import './App.scss';
import Main from './components/Main/Main';
import Signup from './components/SignUp/SignUp';
import Clinician from './components/Clinician/Clinician';
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
        <Routes>
          <Route path='/' element ={<Main handleLogin={handleLogin} user={user}/>}/>
          <Route path='/signup' element ={<Signup/>} /> 
          <Route path='/clinician' element ={<Clinician handleLogout={handleLogout} user={user}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
