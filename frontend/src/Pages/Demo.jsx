import React from 'react'
import HeroSection from '../Components/Demo Page/HeroSection'
import Navbar from '../Common/Navbar'
import Dashboard from '../Components/Demo Page/Dashboard'
import SessionTimer from '../Components/Demo Page/SessionTimer'
import PlanningEngine from '../Components/Demo Page/PlanningEngine'
import Productivity from '../Components/Demo Page/Productivity'
import SmartRecommendation from '../Components/Demo Page/SmartRecommendation'
import MobileResponsive from '../Components/Demo Page/MobileResponsive'
import Footer from "../Common/Footer"
import CTA from '../Components/Demo Page/CTA'

export default function Demo() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Dashboard></Dashboard>
      <SessionTimer></SessionTimer>
      <PlanningEngine></PlanningEngine>
      <Productivity></Productivity>
      <SmartRecommendation></SmartRecommendation>
      <MobileResponsive></MobileResponsive>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}
