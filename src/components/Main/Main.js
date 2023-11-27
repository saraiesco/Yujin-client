import './Main.scss';
import logo from '../../assets/yujin.png';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function Main({handleLogin, user}){
    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();
        
        axios.post("http://localhost:8080/clinicians/login", {
            username: event.target.username.value,
            password: event.target.password.value
        })
            .then((response) => {
                let data = response.data;
                handleLogin(data);
                navigate('/clinician');
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return(
        <div className= 'Main'>
            <div className='Main__header'>
            <p>Hira</p>
            <img className='logo' src={logo}/>
            </div>
            <div className='login'>
                <form className="login__form" onSubmit={handleSubmit}>
                    <h1 className="login__title">Log in</h1>

                    
                    <label htmlFor='username' >Username</label>
                    <input type="text" name="username" label="username" />
                

                
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