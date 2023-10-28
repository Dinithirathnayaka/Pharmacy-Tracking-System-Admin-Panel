import React from 'react'
import './UserPatient.css'
import Leftbar from '../../components/Leftbar/Leftbar';
import Navbar from '../../components/Navbar/Navbar';
import Userfeedtop from './userfeedtop';
import Searchbar from '../../components/Searchbar/Searchbar';

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
                    <div className='des'>Here is a list of all patients</div>
                  </div>
                  <br/>
                  <div className='searchbar'>
                    <Searchbar/>
                    <button>Add patient</button>
                  </div>
                </div>
            </div>
        </div>                  
      </div>
      
     
    )
  }