import React from 'react'
import './Feed.css'
import {ArrowUpward} from '@mui/icons-material'

export default function Feed() {
  return (
    <div className="feed">
        <div className="feedTop">
          <span><u>Home</u>/ Dashboard</span>
        </div>
        <div className="feedBottom">
          <div className="bottomUp">

            <div className="buContainer">
              <img src="/assets/clipArt1.PNG" alt="" />
              
              <div className="buText">
                <div className="count">75</div>
                <div className="userType">Doctors</div>
                <div className="rate"><ArrowUpward className='icon'/> 4% (30 days)</div>
              </div>
            </div>

            <div className="buContainer">
              <img src="/assets/clipArt2.PNG" alt="" />
              
              <div className="buText">
                <div className="count">605</div>
                <div className="userType">Pharmacists</div>
                <div className="rate"><ArrowUpward className='icon'/> 12% (30 days)</div>
              </div>
            </div>

            <div className="buContainer">
              <img src="/assets/clipArt3.PNG" alt="" />
              
              <div className="buText">
                <div className="count">1520</div>
                <div className="userType">Patients</div>
                <div className="rate"><ArrowUpward className='icon'/> 6% (30 days)</div>
              </div>
            </div>

          </div>


          <div className="bottomDown">
            <span>Recent Users</span>
            <table className="table">
              <tb>
                <tr>
                  <td>
                    <p className='name'>Wasantha Perera</p>
                    <p className='position'>Doctor</p>
                  </td>
                  <td>11 May 12:56</td>
                  <td>
                    <button className="reject">Reject</button>
                    <button className="approve">Approve</button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p className='name'>Anura Kumara</p>
                    <p className='position'>Pharmacist</p>
                  </td>
                  <td>15 May 09:06</td>
                  <td>
                    <button className="reject">Reject</button>
                    <button className="approve">Approve</button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p className='name'>Dinithi Nayanamali</p>
                    <p className='position'>Pharmacist</p>
                  </td>
                  <td>11 May 12:56</td>
                  <td>
                    <button className="reject">Reject</button>
                    <button className="approve">Approve</button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p className='name'>Viraj Tharuka</p>
                    <p className='position'>Doctor</p>
                  </td>
                  <td>15 August 10:56</td>
                  <td>
                    <button className="reject">Reject</button>
                    <button className="approve">Approve</button>
                  </td>
                </tr>
              </tb>
            </table>
          </div>
        </div>
    </div>
  )
}
