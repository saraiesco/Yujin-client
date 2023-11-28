import './Patients.scss';
import {Link} from 'react-router-dom';


function Patients({user}){
    return(
        <div className='patients'>
            <h2 className='patients_title'>Patient List</h2>
            <div>
                <p>Name</p>
                <p>Age</p>
                <p>Gender</p>
                <p>Diagnosis</p>
                <p>Phone Number</p>
                <p>Address</p>
                <span class="material-symbols-outlined"> arrow_right_alt</span>
            </div>
        </div>
    )
}

export default Patients;