import './Main.scss';
import logo from '../../assets/yujin.png';
import {Link,useNavigate} from 'react-router-dom';

function Main(){
    return(
        <div className= 'Main'>
            <div className='Main__header'>
            <p>Hira</p>
            <img className='logo' src={logo}/>
            </div>
            <div className='login'>
                <form className="login__form" >
                    <h1 className="login__title">Log in</h1>

                    
                    <label htmlFor='Email' >Username</label>
                    <input type="text" name="email" label="email" />
                

                
                    <label htmlFor='password' >Password</label>
                    <input type="password" name="password" label="Password" />
                

                    <button className="login__button">
                        Log in
                    </button>

                </form>
                <p>
                    Need an account? <Link to="/signup">Sign up</Link>
                </p>

            </div>
        </div>
    )
}

export default Main;