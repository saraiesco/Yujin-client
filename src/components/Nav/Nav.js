import './Nav.scss';
import {Link,useNavigate} from 'react-router-dom';
import logo from '../../assets/yujin.png'
import { useState } from 'react';


function Nav({handleLogout}){
    const navigate = useNavigate();

    const [picked, setPicked]=useState(false);

    return(
        <div className='nav'>
            <img src={logo} className = "navlogo"/>
            <div onClick={() => window.history.back()}><span class="material-symbols-outlined nav__icon">arrow_back</span></div>
            <Link to='/clinician'><span className="material-symbols-outlined nav__icon">calendar_month</span></Link>
            <Link to='/patients'><span className="material-symbols-outlined nav__icon">group</span></Link>
            <Link to='/notes'><span className="material-symbols-outlined nav__icon">notes</span></Link>
            <span onClick={() => {try { navigate('/');} catch (error) {console.error('Navigation failed:', error); } handleLogout();}} class="material-symbols-outlined nav__icon">logout</span>
        </div>
    )
}

export default Nav;