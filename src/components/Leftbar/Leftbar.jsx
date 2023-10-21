import React from 'react'
import './Leftbar.css'
import {Home, ManageAccounts, AccountBox, Chat, NotificationsActive} from '@mui/icons-material'

export default function Leftbar() {
  return (
    <div className="leftbar">
        <div className="leftbarOptions">
            <Home className='optionIcon'/>
            <span className="optionName">Dashboard</span>
        </div>

        <div className="leftbarOptions">
            <ManageAccounts className='optionIcon'/>
            <span className="optionName">Account</span>
        </div>

        <div className="leftbarOptions">
            <AccountBox className='optionIcon'/>
            <span className="optionName">Users</span>
        </div>

        <div className="leftbarOptions">
            <Chat className='optionIcon'/>
            <span className="optionName">Messages</span>
        </div>

        <div className="leftbarOptions">
            <NotificationsActive className='optionIcon'/>
            <span className="optionName">Notifications</span>
        </div>
    </div>  )
}
