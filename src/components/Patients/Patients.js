import './Patients.scss';
import { useState } from 'react';
import Form from '../Form/Form';


function Patients({user, show, setShow, handleClose}){
    const [patient, setPatient]=useState(null);


    const handleClick=()=>{
        setShow(true)
    }


    return(
        <div className='patients'>
            <div>
            <input type="search" name="search" id="search" placeholder="search"/>
            </div>
 
{patient? 
<>
<div className='single'>
    <div className='single_top'>
        <p>Patient &gt; {patient.name}</p>
    </div>
         <div className='single_topbottom'>
                <div className='single_top'>
                     <img src={patient.img} className='single_img'/>
                     <div className='single_name'>
                        <h2 className='single_lable'>Patient:</h2>
                        <div  className='single_lable'> {patient.name}</div> 
                     </div>
                </div>

            <div className='single_flex'>
                <div className='single_left'>
                    <div>
                    <p >Age:</p>
                    <div className='single_lable'>{patient.age}</div>
                    </div>
                    <div>
                        <div className='single_lable'> Diagnosis: </div>
                        <div > {patient.conditions[0]}</div> 
                    </div>
                    <div>
                        <p className='single_lable'>Symptoms:</p>
                        <div > {patient.symptoms}</div> 
                    </div>
                </div>

                <div className='single_right'>
                <div>
                    <p >Last Appointment:</p>
                    <div className='single_lable'> {patient.lastApp}</div> 
                </div>
                 <div>
                    <p >Next Appointment:</p>
                    <div className='single_lable'> {patient.nextApp}</div> 
                </div>
                </div>

             </div>   
                <button className='single_button--trash'><span class="material-symbols-outlined">delete</span></button>
         </div>

</div>
 </>: 
        <>
            <h2 className='patients_title'>Patient List</h2>
                <button className='patients_button' onClick={handleClick}>
                    +
                </button>
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
                    <div className='patients_individual' onClick={()=>setPatient(person)}>
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
        </>
}
{show && <Form user={user} show={show} setShow={setShow} handleClose={handleClose} />}
        </div>
    )
}

export default Patients;