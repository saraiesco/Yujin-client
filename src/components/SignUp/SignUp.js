import './SignUp.scss';
import {Link,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SignUp({handleLogin}){
    const [success, setSuccess] = useState(false)

    async function handleSubmit (event) {
        event.preventDefault();
        
        axios.post("http://localhost:8080/clinicians", {
            username: event.target.username.value,
            password: event.target.password.value,
            name: event.target.name.value,
            specialty: event.target.specialty.value,
            clientIds: []
        })
            .then((response) => {
                let data = response.data;
                console.log(data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <div className='signup'>
            <form className="signup__form"  onSubmit={handleSubmit}>
            <h1 className="signup__title"> Sign Up</h1>
                <div className='signup__tabletflex'>
                <div className='signup__flex signup__left'>
                <label className="signup__label" htmlFor='name' >Name</label>
                <input type="text" name="name" label="name" />
                <label className="signup__label" htmlFor='specialty' >Specialty</label>
                <input type="text" name="specialty" label="specialty" />
                </div>
                
                <div className='signup__flex'>
                <label className="signup__label" htmlFor='username' >Username</label>
                <input type="text" name="username" label="username" />
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