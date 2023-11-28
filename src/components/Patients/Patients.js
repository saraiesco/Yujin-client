import './Patients.scss';
import {Link} from 'react-router-dom';


function Patients({user}){
    console.log(user)
    return(
        <div className='patients'>
            <h2 className='patients_title'>Patient List</h2>
            <div className='patients_array'>
                <p className='patients_nondynamic--1'>Name</p>
                <p className='patients_nondynamic--2'>Age</p>
                <p className='patients_nondynamic--3'>Diagnosis</p>
                <p className='patients_nondynamic--4'>Phone Number</p>
                <p className='patients_nondynamic--5'>Address</p>
                <span className="material-symbols-outlined"> arrow_right_alt</span>
                <div className='patients_container'>
    
                {user.fullClientObjects.map((person, idx) => {
                    return(
                    <div>
                    <img src={person.img} className='patient_img'/>
                    <div key={idx} className='patient_item'> {person.name}</div> 
                    <div className='patient_item'> {person.conditions[0]}</div> 
                    </div>
                    )
                 })}
                </div>
            </div>
        </div>
    )
}

export default Patients;