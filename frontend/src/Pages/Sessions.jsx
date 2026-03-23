import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import FocusTimer from '../Components/Sessions Page/FocusTimer'

export default function Sessions() {
  return (
    <div>
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='flex'>
            <Sidebar></Sidebar>

            <div className='flex-1'>
                <FocusTimer></FocusTimer>
            </div>
        </div>
    </div>
  )
}
