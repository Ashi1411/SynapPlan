import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import FocusTimer from '../Components/Sessions Page/FocusTimer'
import SessionDetail from '../Components/Sessions Page/SessionDetail'
import WeeklySummary from '../Components/Sessions Page/WeeklySummary'

export default function SessionsPage() {
  return (
    <div>
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='relative h-full'>
            <Sidebar></Sidebar>

            <div className='ml-12 h-full overflow-y-auto'>
                <FocusTimer></FocusTimer>
                <SessionDetail></SessionDetail>
                <WeeklySummary></WeeklySummary>
            </div>
        </div>
    </div>
  )
}
