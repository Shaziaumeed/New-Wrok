import React from 'react'
import Herosection from './Components/Herosection/Herosection'
import LogoSection from './Components/LogoSection/LogoSection'
import BenefitsSection from './Components/BenefitsSection/BenefitsSection'
import ClientFirstSection from './Components/ClientFirstSection/ClientFirstSection'
import FreeSection from './Components/FreeSection/FreeSection'
import SupportSection from './Components/SupportSection/SupportSection'
import SupporttwoSection from './Components/SupporttwoSection/SupporttwoSection'
import FAQSection from './Components/FAQSection/FAQSection'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <LogoSection/>
      <BenefitsSection/>
      <ClientFirstSection/>
      <FreeSection/>
      <SupportSection/>
      <SupporttwoSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default page
