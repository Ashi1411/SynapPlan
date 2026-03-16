import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import PlannerCard from '../Components/Planner Page/PlannerCard'

export default function Planner() {
  return (
    <div>
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='flex'>
            <Sidebar></Sidebar>

            <div className='flex-1'>
                <PlannerCard></PlannerCard>
            </div>
        </div>
    </div>
  )
}
