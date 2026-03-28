import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import FocusTimer from '../Components/Sessions Page/FocusTimer'
import SessionDetail from '../Components/Sessions Page/SessionDetail'

export default function SessionsPage() {
  return (
    <div>
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='flex'>
            <Sidebar></Sidebar>

            <div className='flex-1'>
                <FocusTimer></FocusTimer>
                <SessionDetail></SessionDetail>
            </div>
        </div>
    </div>
  )
}
