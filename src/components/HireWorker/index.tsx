import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import WorkerFeature from './workerFeature'
import WorkerData from './workerData'


const HireWorker = () => {
  return (
    <div>
    {/* <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"> */}
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
          <SectionTitle
            subtitle="Join Us!"
            title="Who We Hire"
            paragraph="We&apos;re looking for skilled and experienced workers to fill roles across commercial construction sites:"
            center
          />

          <div className="-mx-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 justify-center">
            {WorkerData.map((feature, index) => (
              <WorkerFeature key={index} feature={feature} />
            ))}
          </div>
      </div>
    </section>
    </div>

  )
}

export default HireWorker;