import './App.scss';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import Calendar from './components/Calendar/Calendar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Main/>}/>
          <Route path='/login' element ={<Login />} /> 
          <Route path='/signup' element ={<Signup/>} /> 
          <Route path='/calendar' element ={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
