import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import HeroSection from '../Components/Dashboard page/HeroSection'
import TodayPlan from '../Components/Dashboard page/TodayPlan'

export default function Dashboard() {
  return (
    <div>
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='flex'>
          <Sidebar></Sidebar>

          <div className='flex-1'>
            <HeroSection></HeroSection>
            <TodayPlan></TodayPlan>
          </div>
        </div>
    </div>
  )
}
