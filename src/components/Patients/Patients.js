import './Patients.scss';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';


function Patients({user}){
    const [isActive, setIsActive]=useState(false);
    const [patient, setPatient]=useState(null);

    return(
        <div className='patients'>
            <h2 className='patients_title'>Patient List</h2>
            <button className='patients_button'>Add Patient</button>
            <div className='patients_chart'>
                <div className='patients_header'>
                    <p className='patients_nondynamic--1'>Patient</p>
                    <p className='patients_nondynamic--2'>Name</p>
                    <p className='patients_nondynamic--3'>Age</p>
                    <p className='patients_nondynamic--4'>Diagnosis</p>

             </div>
                <div className='patients_container'>
                {user.fullClientObjects.map((person, idx) => {
                    return(
                    <div className='patients_individual'>
                        <img src={person.img} className='patient_img'/>
                        <div key={idx} className='patient_item'> {person.name}</div> 
                        <div>{person.age}</div>
                        <div className='patient_item'> {person.conditions[0]}</div> 
                        <span class="material-symbols-outlined">keyboard_arrow_right</span>
                    </div>
                    )
                 })}
                </div>
            </div>
        </div>
    )
}

export default Patients;