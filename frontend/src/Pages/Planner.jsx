import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import PlannerCard from '../Components/Planner Page/PlannerCard'

export default function Planner() {
  return (
    <div>
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='relative h-full'>
            <Sidebar></Sidebar>

            <div className='ml-12 h-full overflow-y-auto'>
                <PlannerCard></PlannerCard>
            </div>
        </div>
    </div>
  )
}
