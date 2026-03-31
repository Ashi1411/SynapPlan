import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import Profile from '../Components/Settings page/Profile'
import SecurityComponent from '../Components/Settings page/SecurityComponent'
import NotificationsComponent from '../Components/Settings page/NotificationsComponent'

export default function Settings() {
  return (
    <div>
          <AfterLoginNavbar></AfterLoginNavbar>
          <div className="flex">
            <Sidebar></Sidebar>
    
            <div className="flex-1">
                <Profile></Profile>
                <SecurityComponent></SecurityComponent>
                <NotificationsComponent></NotificationsComponent>
            </div>
          </div>
        </div>
  )
}
