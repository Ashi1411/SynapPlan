import React from 'react'
import Navbar from '../Common/Navbar'
import HeroSection from '../Components/How it works page/HeroSection'
import SystemProcess from '../Components/How it works page/SystemProcess'
import DecisionEngine from '../Components/How it works page/DecisionEngine'
import CTA from '../Components/How it works page/CTA'
import Footer from '../Common/Footer'

export default function HowItWorks() {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <SystemProcess></SystemProcess>
        <DecisionEngine></DecisionEngine>
        <CTA></CTA>
        <Footer></Footer>
    </div>
  )
}
