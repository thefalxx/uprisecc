import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import crewData from './crewData'
import CrewFeature from './crewFeature'


const hireacrew = () => {
  return (
    <div>
    {/* <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"> */}
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
          <SectionTitle
            subtitle="Our Team"
            title="Uprise Cranes and Contractors Crew"
            paragraph="We supply highly skilled and experienced professionals for commercial construction projects, ensuring every lift is executed safely and efficiently. Our team includes:"
            center
          />

          <div className="-mx-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 justify-center">
            {crewData.map((feature, index) => (
              <CrewFeature key={index} feature={feature} />
            ))}
          </div>
      </div>
    </section>
    </div>

  )
}

export default hireacrew