import React from 'react'
import Navbar from '../Common/Navbar'
import '../styles/global.css'
import HeroSection from '../Components/Home Page/HeroSection'
import Problem from '../Components/Home Page/Problem'
import Solution from '../Components/Home Page/Solution'
import HowItWorks from '../Components/Home Page/HowItWorks'
import Results from '../Components/Home Page/Results'
import TrustedSystem from '../Components/Home Page/TrustedSystem'
import CTA from '../Components/Home Page/CTA'
import Faq from '../Components/Home Page/Faq'
import Footer from '../Common/Footer'

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Problem></Problem>
        <Solution></Solution>
        <HowItWorks></HowItWorks>
        <Results></Results>
        <TrustedSystem></TrustedSystem>
        <CTA></CTA>
        <Faq></Faq>
        <Footer></Footer>
    </div>
  )
}
