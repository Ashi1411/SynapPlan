import React from 'react'
import AfterLoginNavbar from '../Common/AfterLoginNavbar'
import Sidebar from '../Common/Sidebar'
import HeroSection from '../Components/Dashboard page/HeroSection'
import TodayPlan from '../Components/Dashboard page/TodayPlan'
import Performance from '../Components/Dashboard page/Performance'
import Recommendation from '../Components/Dashboard page/Recommendation'

export default function Dashboard() {
  return (
    <div className="h-screen overflow-hidden">
        <AfterLoginNavbar></AfterLoginNavbar>
        <div className='flex h-full'>
          <Sidebar></Sidebar>

          <div className="flex-1 overflow-y-auto">
            <HeroSection></HeroSection>
            <TodayPlan></TodayPlan>
            <Performance></Performance>
            <Recommendation></Recommendation>
          </div>
        </div>
    </div>
  )
}
