import React from 'react'
import FixedHeader from '../../Components/ShareableComponents/FixedHeader/FixedHeader'
import Banner from '../../Components/ShareableComponents/Banner/Banner'

const Donate = () => {
  return (
    <>
    
    <FixedHeader />
      <div>
        <Banner
          backgroundImage="/assets/programs-img/program-banner.png"
          title="Donate"
          subtitle="At Kick-Ass Seniors NFP, we offer a range of free cybersecurity education and support programs tailored to seniors' needs. Our services empower older adults to safely enjoy the benefits of technology through personalized guidance."
        />
      </div>
    
    
    </>
  )
}

export default Donate