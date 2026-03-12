import React from 'react'
import Navbar from '../Common/Navbar'
import HeroSection from '../Components/Features Page/HeroSection'
import FeatureExplanation from '../Components/Features Page/FeatureExplanation'
import BioRhythm from '../Components/Features Page/BioRhythm'
import CognitiveLoadPairing from '../Components/Features Page/CognitiveLoadPairing'
import AcademicDebtRecovery from '../Components/Features Page/AcademicDebtRecovery'
import ContextAwarePlanning from '../Components/Features Page/ContextAwarePlanning'
import WhoItIsFor from '../Components/Features Page/WhoItIsFor'
import CTA from '../Components/Features Page/CTA'
import Footer from '../Common/Footer'

export default function Features() {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <FeatureExplanation></FeatureExplanation>
        <BioRhythm></BioRhythm>
        <CognitiveLoadPairing></CognitiveLoadPairing>
        <AcademicDebtRecovery></AcademicDebtRecovery>
        <ContextAwarePlanning></ContextAwarePlanning>
        <WhoItIsFor></WhoItIsFor>
        <CTA></CTA>
        <Footer></Footer>
    </div>
  )
}
