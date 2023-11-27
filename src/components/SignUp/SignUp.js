import './SignUp.scss';
import {Link,useNavigate} from 'react-router-dom';

function SignUp(){
    return(
        <div className='signup'>
            <form className="signup__form"  >
            <h1 className="signup__title"> Sign Up</h1>
                <div className='signup__tabletflex'>
                <div className='signup__flex signup__left'>
                <label className="signup__label" htmlFor='first_name' >First Name</label>
                <input type="text" name="first_name" label="First name" />
                <label className="signup__label" htmlFor='last_name' >Last Name</label>
                <input type="text" name="last_name" label="Last name" />
                </div>
                
                <div className='signup__flex'>
                <label className="signup__label" htmlFor='email' >Username</label>
                <input type="text" name="email" label="Email" />
                <label className="signup__label" htmlFor='password' >Password</label>
                <input type="password" name="password" label="Password" />
                </div>
                </div>

                <button className="signup__button">Sign up</button>
            </form>
            <p>
                Have an account? <Link to="/">Log in</Link>
            </p> 
        </div>
    )
}

export default SignUp;