import React from 'react'
import './UserPatient.css'
import Leftbar from '../components/Leftbar/Leftbar'
import Navbar from '../components/Navbar/Navbar'


export default function UserPatient() {
    return (
      <div className="userpatient">
        <Navbar/>
        
            <Leftbar/>
            <div classname="feedtop">
                <span> <u>Home</u> / <u>Users</u> / Patient </span>
            </div>
        
                  
      </div>
      
     
    )
  }