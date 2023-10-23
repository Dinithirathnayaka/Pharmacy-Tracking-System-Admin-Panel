import React from 'react'
import './UserPatient.css'
import Leftbar from '../../components/Leftbar/Leftbar';
import Navbar from '../../components/Navbar/Navbar';
import Userfeedtop from './userfeedtop';


export default function UserPatient() {
    return (
      <div className="userpatient">
        <div className='container'>
            <Navbar/>
            <div className='container1'>
                <Leftbar/>
                <div className='container2'>
                  <Userfeedtop/>
                  <div className='person'>
                    <h2>Patients</h2>
                    <p>Here is a list of all patients</p>
                  </div>
                </div>
            </div>
        </div>                  
      </div>
      
     
    )
  }