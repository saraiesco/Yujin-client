import './App.scss';
import Main from './components/Main/Main';
import Signup from './components/SignUp/SignUp';
import Clinician from './components/Clinician/Clinician';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Main/>}/>
          <Route path='/signup' element ={<Signup/>} /> 
          <Route path='/clinician' element ={<Clinician />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
